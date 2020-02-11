import {IDrawSettings} from '../interface/IDrawSettings';

export interface ICoordinates {
    x: number,
    y: number
}

export const draw = (
    ctx: CanvasRenderingContext2D,
    coordinates: ICoordinates,
    drawSettings?: IDrawSettings
): void => {
    let radius = 2;
    let color = 'black';

    if (drawSettings) {
        radius = drawSettings.brushRadius ? drawSettings.brushRadius : 2;
        color = drawSettings.brushColor ? drawSettings.brushColor : 'black';
    }

    ctx.strokeStyle = color;
    ctx.lineWidth = radius;
    ctx.lineTo(coordinates.x, coordinates.y,);
    ctx.stroke();
};

export const getCoordinates = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>, rect: DOMRect): ICoordinates => {
    const x: number = event.clientX - rect.left;
    const y: number = event.clientY - rect.top;

    return {x, y};
};

