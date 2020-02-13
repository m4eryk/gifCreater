import {IGifSetting} from '../interface/IGifSetting';
import {IImage} from '../../imageDraw/interface/IImage';
// @ts-ignore
import GIFEncoder from 'gifencoder';


const setSetting = (encoder: GIFEncoder, setting: IGifSetting) => {
    encoder.setRepeat(0);
    encoder.setDelay(setting.delay);
    encoder.setQuality(setting.quality);
};

export const createGif = (imageArray: IImage[], setting?: IGifSetting) => {
    const encoder = new GIFEncoder(400, 400);

    if(setting) {
        setSetting(encoder, setting);
    }

    encoder.start();
    imageArray.forEach(item => encoder.addFrame(item.imageData.data));
    encoder.finish();

    const blob = new Blob(
        [encoder.out.getData()],
        {type: 'image/gif'}
    );

    return URL.createObjectURL(blob);
};
