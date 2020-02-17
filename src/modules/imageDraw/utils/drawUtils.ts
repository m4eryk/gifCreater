import React from 'react';
import {IDrawSettings} from '../interface/IDrawSettings';

export interface ICoordinates {
    x: number,
    y: number
}

export const getCoordinates = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>, rect: DOMRect): ICoordinates => {
    const x: number = event.clientX - rect.left;
    const y: number = event.clientY - rect.top;

    return {x, y};
};

const configureRect = (drawSettings: IDrawSettings) => {
    const r = drawSettings.brushRadius ? drawSettings.brushRadius * -1 : -10;

    return {w: r, h: r};
};

export const draw = (
    ctx: CanvasRenderingContext2D,
    {x, y}: ICoordinates,
    drawSettings: IDrawSettings
): void => {
    ctx.fillStyle = drawSettings?.brushColor || 'black';
    const {w, h} = configureRect(drawSettings);

    ctx.fillRect(x, y, w, h);
};
