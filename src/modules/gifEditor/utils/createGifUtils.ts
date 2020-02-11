import {IGifSetting} from '../interface/IGifSetting';
import {IImage} from '../../imageDraw/interface/IImage';
import GIFEncoder from './GIFEncoder';

const gif = GIFEncoder;

const setSetting = (setting: IGifSetting) => {
    gif.setOptions({repeat: setting.repeat, quality: setting.quality});
};

export const createGif = (imageArray: IImage[], setting?: IGifSetting) => {

    console.log(GIFEncoder.setDelay(500));

};
