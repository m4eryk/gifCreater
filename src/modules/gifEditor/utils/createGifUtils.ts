import {IGifSetting} from '../interface/IGifSetting';
import {IImage} from '../../imageDraw/interface/IImage';
// @ts-ignore
import GIFEncoder from 'gifencoder';


const setSetting = (encoder: GIFEncoder, setting: IGifSetting) => {
    encoder.setRepeat(setting.repeat ? 0 : 1);
    encoder.setDelay(500);
    encoder.setQuality(10);
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
    encoder.setDispose(0);

    return URL.createObjectURL(blob);
};
