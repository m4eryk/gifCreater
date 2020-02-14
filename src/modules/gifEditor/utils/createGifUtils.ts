import {IGifSetting} from '../interface/IGifSetting';
import {IImage} from '../../imageDraw/interface/IImage';
import GIFEncoder from 'gifencoder';

const setSetting = (encoder: GIFEncoder, setting: IGifSetting) => {
    encoder.setRepeat(setting.repeat ? 0 : 1);
    encoder.setDelay(setting.delay || 500);
    encoder.setQuality(setting.quality || 10);
};

export const createGif = (imageArray: IImage[], setting?: IGifSetting) => {
    const encoder = new GIFEncoder(400, 400);

    if (setting) {
        setSetting(encoder, setting);
    }

    encoder.start();
    imageArray.forEach(item => encoder.addFrame(item.imageData.data));
    encoder.finish();

    const blob = new Blob(
        [encoder.out.getData()],
        {type: 'imageArray/gif'}
    );

    return URL.createObjectURL(blob);
};
