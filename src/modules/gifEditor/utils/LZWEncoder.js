let LZWEncoder = function () {

    let exports = {};
    let EOF = -1;
    let imgW;
    let imgH;
    let pixAry;
    let initCodeSize;
    let remaining;
    let curPixel;

    let BITS = 12;
    let HSIZE = 5003;

    let n_bits; // number of bits/code
    let maxbits = BITS; // user settable max # bits/code
    let maxcode; // maximum code, given n_bits
    let maxmaxcode = 1 << BITS; // should NEVER generate this code
    let htab = [];
    let codetab = [];
    let hsize = HSIZE; // for dynamic table sizing
    let free_ent = 0; // first unused entry

    let clear_flg = false;


    let g_init_bits;
    let ClearCode;
    let EOFCode;
    let cur_accum = 0;
    let cur_bits = 0;
    let masks = [0x0000, 0x0001, 0x0003, 0x0007, 0x000F, 0x001F, 0x003F, 0x007F, 0x00FF, 0x01FF, 0x03FF, 0x07FF, 0x0FFF, 0x1FFF, 0x3FFF, 0x7FFF, 0xFFFF];

    let a_count;

    let accum = [];

    let LZWEncoder = exports.LZWEncoder = function LZWEncoder(width, height, pixels, color_depth) {
        imgW = width;
        imgH = height;
        pixAry = pixels;
        initCodeSize = Math.max(2, color_depth);
    };

    let char_out = function char_out(c, outs) {
        accum[a_count++] = c;
        if (a_count >= 254) flush_char(outs);
    };

    // Clear out the hash table
    // table clear for block compress

    let cl_block = function cl_block(outs) {
        cl_hash(hsize);
        free_ent = ClearCode + 2;
        clear_flg = true;
        output(ClearCode, outs);
    };

    // reset code table
    var cl_hash = function cl_hash(hsize) {
        for (let i = 0; i < hsize; ++i) htab[i] = -1;
    };

    let compress = function compress(init_bits, outs) {

        let fcode;
        let i; /* = 0 */
        let c;
        let ent;
        let disp;
        let hsize_reg;
        let hshift;

        g_init_bits = init_bits;

        clear_flg = false;
        n_bits = g_init_bits;
        maxcode = MAXCODE(n_bits);

        ClearCode = 1 << (init_bits - 1);
        EOFCode = ClearCode + 1;
        free_ent = ClearCode + 2;

        a_count = 0; // clear packet

        ent = nextPixel();

        hshift = 0;
        for (fcode = hsize; fcode < 65536; fcode *= 2)
            ++hshift;
        hshift = 8 - hshift; // set hash code range bound

        hsize_reg = hsize;
        cl_hash(hsize_reg); // clear hash table

        output(ClearCode, outs);

        outer_loop: while ((c = nextPixel()) !== EOF) {
            fcode = (c << maxbits) + ent;
            i = (c << hshift) ^ ent; // xor hashing

            if (htab[i] === fcode) {
                ent = codetab[i];
                continue;
            } else if (htab[i] >= 0) { // non-empty slot

                disp = hsize_reg - i; // secondary hash (after G. Knott)
                if (i === 0) disp = 1;

                do {
                    if ((i -= disp) < 0)
                        i += hsize_reg;

                    if (htab[i] === fcode) {
                        ent = codetab[i];
                        continue outer_loop;
                    }
                } while (htab[i] >= 0);
            }

            output(ent, outs);
            ent = c;
            if (free_ent < maxmaxcode) {
                codetab[i] = free_ent++; // code -> hashtable
                htab[i] = fcode;
            } else cl_block(outs);
        }

        output(ent, outs);
        output(EOFCode, outs);
    };

    // ----------------------------------------------------------------------------
    let encode = function encode(os) {
        os.writeByte(initCodeSize); // write "initial code size" byte
        remaining = imgW * imgH; // reset navigation variables
        curPixel = 0;
        compress(initCodeSize + 1, os); // compress and write the pixel data
        os.writeByte(0); // write block terminator
    };

    // Flush the packet to disk, and reset the accumulator
    var flush_char = function flush_char(outs) {
        if (a_count > 0) {
            outs.writeByte(a_count);
            outs.writeBytes(accum, 0, a_count);
            a_count = 0;
        }
    };

    /**
     * @return {number}
     */
    var MAXCODE = function MAXCODE(n_bits) {
        return (1 << n_bits) - 1;
    };

    // ----------------------------------------------------------------------------
    // Return the next pixel from the image
    // ----------------------------------------------------------------------------

    var nextPixel = function nextPixel() {
        if (remaining === 0) return EOF;
        --remaining;
        let pix = pixAry[curPixel++];
        return pix & 0xff;
    };

    var output = function output(code, outs) {

        cur_accum &= masks[cur_bits];

        if (cur_bits > 0) cur_accum |= (code << cur_bits);
        else cur_accum = code;

        cur_bits += n_bits;

        while (cur_bits >= 8) {
            char_out((cur_accum & 0xff), outs);
            cur_accum >>= 8;
            cur_bits -= 8;
        }

        // If the next entry is going to be too big for the code size,
        // then increase it, if possible.

        if (free_ent > maxcode || clear_flg) {

            if (clear_flg) {

                maxcode = MAXCODE(n_bits = g_init_bits);
                clear_flg = false;

            } else {

                ++n_bits;
                if (n_bits === maxbits) maxcode = maxmaxcode;
                else maxcode = MAXCODE(n_bits);
            }
        }

        if (code === EOFCode) {

            // At EOF, write the rest of the buffer.
            while (cur_bits > 0) {
                char_out((cur_accum & 0xff), outs);
                cur_accum >>= 8;
                cur_bits -= 8;
            }

            flush_char(outs);
        }
    };

    LZWEncoder.apply(this, arguments);
};


export default new LZWEncoder();
