import {IGifSetting} from '../interface/IGifSetting';
import {IImage} from '../../imageDraw/interface/IImage';
import {GIFEncoder} from './GIFEncoder';

const setSetting = (setting) => {
    GIFEncoder.setOptions({repeat: setting.repeat, quality: setting.quality});
};
const gif = GIFEncoder();

export const createGif = (imageArray, setting) => {

    console.log(gif);

};
