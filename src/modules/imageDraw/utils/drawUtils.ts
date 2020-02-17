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

const configureRect = (x: number, y: number, r: number) => {
    const xRect = x - (r / 2);
    const yRect = y - (r * 2);

    return {xRect, yRect};
};

export const draw = (
    ctx: CanvasRenderingContext2D,
    {x, y}: ICoordinates,
    drawSettings: IDrawSettings
): void => {
    const r = drawSettings?.brushRadius || 10;
    const {xRect, yRect} = configureRect(x, y, r);

    ctx.fillStyle = drawSettings?.brushColor || 'black';
    ctx.fillRect(xRect, yRect, r, r);
};
