import React from 'react';
import {IDrawSettings} from '../interface/IDrawSettings';
import {DRAW_PATH, OFFSET, SCALE} from '../constants/drawConstant';

export interface ICoordinates {
    x: number,
    y: number
}

export const draw = (
    ctx: CanvasRenderingContext2D,
    {x, y}: ICoordinates,
    drawSettings?: IDrawSettings
): void => {
    ctx.fillStyle = drawSettings?.brushColor || 'black';
    ctx.save();
    ctx.scale(SCALE, SCALE);
    ctx.translate(x / SCALE - OFFSET, y / SCALE - OFFSET);
    ctx.fill(DRAW_PATH);
    ctx.restore();
};

export const getCoordinates = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>, rect: DOMRect): ICoordinates => {
    const x: number = event.clientX - rect.left;
    const y: number = event.clientY - rect.top;

    return {x, y};
};
