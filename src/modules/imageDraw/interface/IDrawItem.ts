import {ICoordinates} from '../utils/drawUtils';
import {IDrawSettings} from './IDrawSettings';

export interface IDrawItem {
    location: ICoordinates;
    drawSettings: IDrawSettings
}
