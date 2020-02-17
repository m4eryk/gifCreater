import {IDrawSettings} from './IDrawSettings';
import {IDrawItem} from './IDrawItem';

export interface IImageDrawState {
    drawSettings: IDrawSettings;
    drawItems: IDrawItem[];
    pastBrushColor: string;
    isErase: boolean;
}
