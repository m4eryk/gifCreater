import {IDrawSettings} from './IDrawSettings';
import {IDrawItem} from './IDrawItem';
import {IImage} from './IImage';

export interface IImageDrawState {
    drawSettings: IDrawSettings;
    drawItems: IDrawItem[];
    imageArray: IImage[];
}
