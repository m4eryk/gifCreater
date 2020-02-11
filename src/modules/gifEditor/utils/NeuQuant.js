

NeuQuant = function () {

    let exports = {};
    let netsize = 256; /* number of colours used */

    /* four primes near 500 - assume no image has a length so large */
    /* that it is divisible by all four primes */

    let prime1 = 499;
    let prime2 = 491;
    let prime3 = 487;
    let prime4 = 503;
    let minpicturebytes = (3 * prime4); /* minimum size for input image */

    /*
     * Program Skeleton ---------------- [select samplefac in range 1..30] [read
     * image from input file] pic = (unsigned char*) malloc(3*width*height);
     * initnet(pic,3*width*height,samplefac); learn(); unbiasnet(); [write output
     * image header, using writecolourmap(f)] inxbuild(); write output image using
     * inxsearch(b,g,r)
     */

    /*
     * Network Definitions -------------------
     */

    let maxnetpos = (netsize - 1);
    let netbiasshift = 4; /* bias for colour values */
    let ncycles = 100; /* no. of learning cycles */

    /* defs for freq and bias */
    let intbiasshift = 16; /* bias for fractions */
    let intbias = (1 << intbiasshift);
    let gammashift = 10; /* gamma = 1024 */
    let gamma = (1 << gammashift);
    let betashift = 10;
    let beta = (intbias >> betashift); /* beta = 1/1024 */
    let betagamma = (intbias << (gammashift - betashift));

    /* defs for decreasing radius factor */
    let initrad = (netsize >> 3); /* for 256 cols, radius starts */
    let radiusbiasshift = 6; /* at 32.0 biased by 6 bits */
    let radiusbias = (1 << radiusbiasshift);
    let initradius = (initrad * radiusbias); /* and decreases by a */
    let radiusdec = 30; /* factor of 1/30 each cycle */

    /* defs for decreasing alpha factor */
    let alphabiasshift = 10; /* alpha starts at 1.0 */
    let initalpha = (1 << alphabiasshift);
    let alphadec; /* biased by 10 bits */

    /* radbias and alpharadbias used for radpower calculation */
    let radbiasshift = 8;
    let radbias = (1 << radbiasshift);
    let alpharadbshift = (alphabiasshift + radbiasshift);
    let alpharadbias = (1 << alpharadbshift);

    /*
     * Types and Global Variables --------------------------
     */

    let thepicture; /* the input image itself */
    let lengthcount; /* lengthcount = H*W*3 */
    let samplefac; /* sampling factor 1..30 */

    // typedef int pixel[4]; /* BGRc */
    let network; /* the network itself - [netsize][4] */
    let netindex = [];

    /* for network lookup - really 256 */
    let bias = [];

    /* bias and freq arrays for learning */
    let freq = [];
    let radpower = [];

    let NeuQuant = exports.NeuQuant = function NeuQuant(thepic, len, sample) {

        let i;
        let p;

        thepicture = thepic;
        lengthcount = len;
        samplefac = sample;

        network = new Array(netsize);

        for (i = 0; i < netsize; i++) {

            network[i] = new Array(4);
            p = network[i];
            p[0] = p[1] = p[2] = (i << (netbiasshift + 8)) / netsize;
            freq[i] = intbias / netsize; /* 1/netsize */
            bias[i] = 0;
        }
    };

    let colorMap = function colorMap() {

        let map = [];
        let index = new Array(netsize);

        for (let i = 0; i < netsize; i++)
            index[network[i][3]] = i;

        let k = 0;
        for (let l = 0; l < netsize; l++) {
            let j = index[l];
            map[k++] = (network[j][0]);
            map[k++] = (network[j][1]);
            map[k++] = (network[j][2]);
        }

        return map;
    };

    /*
     * Insertion sort of network and building of netindex[0..255] (to do after
     * unbias)
     * -------------------------------------------------------------------------------
     */

    let inxbuild = function inxbuild() {

        let i;
        let j;
        let smallpos;
        let smallval;
        let p;
        let q;
        let previouscol;
        let startpos;

        previouscol = 0;
        startpos = 0;
        for (i = 0; i < netsize; i++) {

            p = network[i];
            smallpos = i;
            smallval = p[1]; /* index on g */

            /* find smallest in i..netsize-1 */
            for (j = i + 1; j < netsize; j++) {

                q = network[j];
                if (q[1] < smallval) { /* index on g */
                    smallpos = j;
                    smallval = q[1]; /* index on g */
                }
            }
            q = network[smallpos];

            /* swap p (i) and q (smallpos) entries */
            if (i !== smallpos) {
                j = q[0];
                q[0] = p[0];
                p[0] = j;
                j = q[1];
                q[1] = p[1];
                p[1] = j;
                j = q[2];
                q[2] = p[2];
                p[2] = j;
                j = q[3];
                q[3] = p[3];
                p[3] = j;
            }

            /* smallval entry is now in position i */

            if (smallval !== previouscol) {

                netindex[previouscol] = (startpos + i) >> 1;

                for (j = previouscol + 1; j < smallval; j++) netindex[j] = i;

                previouscol = smallval;
                startpos = i;
            }
        }

        netindex[previouscol] = (startpos + maxnetpos) >> 1;
        for (j = previouscol + 1; j < 256; j++) netindex[j] = maxnetpos; /* really 256 */
    };

    /*
     * Main Learning Loop ------------------
     */

    let learn = function learn() {

        let i;
        let j;
        let b;
        let g;
        let r;
        let radius;
        let rad;
        let alpha;
        let step;
        let delta;
        let samplepixels;
        let p;
        let pix;
        let lim;

        if (lengthcount < minpicturebytes) samplefac = 1;

        alphadec = 30 + ((samplefac - 1) / 3);
        p = thepicture;
        pix = 0;
        lim = lengthcount;
        samplepixels = lengthcount / (3 * samplefac);
        delta = (samplepixels / ncycles) | 0;
        alpha = initalpha;
        radius = initradius;

        rad = radius >> radiusbiasshift;
        if (rad <= 1) rad = 0;

        for (i = 0; i < rad; i++) radpower[i] = alpha * (((rad * rad - i * i) * radbias) / (rad * rad));

        if (lengthcount < minpicturebytes) step = 3;

        else if ((lengthcount % prime1) !== 0) step = 3 * prime1;

        else {

            if ((lengthcount % prime2) !== 0) step = 3 * prime2;
            else {
                if ((lengthcount % prime3) !== 0) step = 3 * prime3;
                else step = 3 * prime4;
            }
        }

        i = 0;
        while (i < samplepixels) {

            b = (p[pix + 0] & 0xff) << netbiasshift;
            g = (p[pix + 1] & 0xff) << netbiasshift;
            r = (p[pix + 2] & 0xff) << netbiasshift;
            j = contest(b, g, r);

            altersingle(alpha, j, b, g, r);
            if (rad !== 0) alterneigh(rad, j, b, g, r); /* alter neighbours */

            pix += step;
            if (pix >= lim) pix -= lengthcount;

            i++;

            if (delta === 0) delta = 1;

            if (i % delta === 0) {
                alpha -= alpha / alphadec;
                radius -= radius / radiusdec;
                rad = radius >> radiusbiasshift;

                if (rad <= 1) rad = 0;

                for (j = 0; j < rad; j++) radpower[j] = alpha * (((rad * rad - j * j) * radbias) / (rad * rad));
            }
        }
    };

    /*
     ** Search for BGR values 0..255 (after net is unbiased) and return colour
     * index
     * ----------------------------------------------------------------------------
     */

    let map = exports.map = function map(b, g, r) {

        let i;
        let j;
        let dist;
        let a;
        let bestd;
        let p;
        let best;

        bestd = 1000; /* biggest possible dist is 256*3 */
        best = -1;
        i = netindex[g]; /* index on g */
        j = i - 1; /* start at netindex[g] and work outwards */

        while ((i < netsize) || (j >= 0)) {

            if (i < netsize) {
                p = network[i];
                dist = p[1] - g; /* inx key */

                if (dist >= bestd) i = netsize; /* stop iter */

                else {

                    i++;
                    if (dist < 0) dist = -dist;
                    a = p[0] - b;
                    if (a < 0) a = -a;
                    dist += a;

                    if (dist < bestd) {
                        a = p[2] - r;
                        if (a < 0) a = -a;
                        dist += a;

                        if (dist < bestd) {
                            bestd = dist;
                            best = p[3];
                        }
                    }
                }
            }

            if (j >= 0) {

                p = network[j];
                dist = g - p[1]; /* inx key - reverse dif */

                if (dist >= bestd) j = -1; /* stop iter */

                else {

                    j--;
                    if (dist < 0) dist = -dist;
                    a = p[0] - b;
                    if (a < 0) a = -a;
                    dist += a;

                    if (dist < bestd) {
                        a = p[2] - r;
                        if (a < 0) a = -a;
                        dist += a;
                        if (dist < bestd) {
                            bestd = dist;
                            best = p[3];
                        }
                    }
                }
            }
        }

        return (best);
    };

    let process = exports.process = function process() {
        learn();
        unbiasnet();
        inxbuild();
        return colorMap();
    };

    /*
     * Unbias network to give byte values 0..255 and record position i to prepare
     * for sort
     * -----------------------------------------------------------------------------------
     */

    let unbiasnet = function unbiasnet() {

        let i;
        let j;

        for (i = 0; i < netsize; i++) {
            network[i][0] >>= netbiasshift;
            network[i][1] >>= netbiasshift;
            network[i][2] >>= netbiasshift;
            network[i][3] = i; /* record colour no */
        }
    };

    /*
     * Move adjacent neurons by precomputed alpha*(1-((i-j)^2/[r]^2)) in
     * radpower[|i-j|]
     * ---------------------------------------------------------------------------------
     */

    let alterneigh = function alterneigh(rad, i, b, g, r) {

        let j;
        let k;
        let lo;
        let hi;
        let a;
        let m;
        let p;

        lo = i - rad;
        if (lo < -1) lo = -1;

        hi = i + rad;
        if (hi > netsize) hi = netsize;

        j = i + 1;
        k = i - 1;
        m = 1;

        while ((j < hi) || (k > lo)) {
            a = radpower[m++];

            if (j < hi) {
                p = network[j++];

                try {
                    p[0] -= (a * (p[0] - b)) / alpharadbias;
                    p[1] -= (a * (p[1] - g)) / alpharadbias;
                    p[2] -= (a * (p[2] - r)) / alpharadbias;
                } catch (e) {
                } // prevents 1.3 miscompilation
            }

            if (k > lo) {
                p = network[k--];

                try {
                    p[0] -= (a * (p[0] - b)) / alpharadbias;
                    p[1] -= (a * (p[1] - g)) / alpharadbias;
                    p[2] -= (a * (p[2] - r)) / alpharadbias;
                } catch (e) {
                }
            }
        }
    };

    /*
     * Move neuron i towards biased (b,g,r) by factor alpha
     * ----------------------------------------------------
     */

    let altersingle = function altersingle(alpha, i, b, g, r) {

        /* alter hit neuron */
        let n = network[i];
        n[0] -= (alpha * (n[0] - b)) / initalpha;
        n[1] -= (alpha * (n[1] - g)) / initalpha;
        n[2] -= (alpha * (n[2] - r)) / initalpha;
    };

    /*
     * Search for biased BGR values ----------------------------
     */

    let contest = function contest(b, g, r) {

        /* finds closest neuron (min dist) and updates freq */
        /* finds best neuron (min dist-bias) and returns position */
        /* for frequently chosen neurons, freq[i] is high and bias[i] is negative */
        /* bias[i] = gamma*((1/netsize)-freq[i]) */

        let i;
        let dist;
        let a;
        let biasdist;
        let betafreq;
        let bestpos;
        let bestbiaspos;
        let bestd;
        let bestbiasd;
        let n;

        bestd = ~(1 << 31);
        bestbiasd = bestd;
        bestpos = -1;
        bestbiaspos = bestpos;

        for (i = 0; i < netsize; i++) {
            n = network[i];
            dist = n[0] - b;
            if (dist < 0) dist = -dist;
            a = n[1] - g;
            if (a < 0) a = -a;
            dist += a;
            a = n[2] - r;
            if (a < 0) a = -a;
            dist += a;

            if (dist < bestd) {
                bestd = dist;
                bestpos = i;
            }

            biasdist = dist - ((bias[i]) >> (intbiasshift - netbiasshift));

            if (biasdist < bestbiasd) {
                bestbiasd = biasdist;
                bestbiaspos = i;
            }

            betafreq = (freq[i] >> betashift);
            freq[i] -= betafreq;
            bias[i] += (betafreq << gammashift);
        }

        freq[bestpos] += beta;
        bias[bestpos] -= betagamma;
        return (bestbiaspos);
    };

    NeuQuant.apply(this, arguments);
    return exports;
};
