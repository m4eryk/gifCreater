import {IDrawSettings} from '../interface/IDrawSettings';

export interface ICoordinates {
    x: number,
    y: number
}

export const draw = (
    ctx: CanvasRenderingContext2D,
    { x, y }: ICoordinates,
    drawSettings?: IDrawSettings
): void => {
    const canvasSettings = Object.assing({}, ctx);

    canvasSettings.strokeStyle = drawSettings?.brushColor || 'black';
    canvasSettings.lineWidth = drawSettings?.brushRadius || 2;
    canvasSettings.lineTo(x, y);
    canvasSettings.stroke();
};

export const getCoordinates = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>, rect: DOMRect): ICoordinates => {
    const x: number = event.clientX - rect.left;
    const y: number = event.clientY - rect.top;

    return { x, y };
};

