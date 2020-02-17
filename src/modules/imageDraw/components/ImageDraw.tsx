import React, {ChangeEvent, useCallback, useRef, useEffect, useState} from 'react';
import {draw, getCoordinates, ICoordinates} from '../utils/drawUtils';
import {IImageDrawWrapper} from './ImageDrawWrapper';
import {CANVAS_HEIGHT, CANVAS_WIDTH} from '../constants/drawConstant';
import CheckBox from '../../../core/components/CheckBox/CheckBox';
import StyledDrawSettingsTitle from '../styled/StyledDrawSettingsTitle';
import StyledImageContainer from '../styled/StyledImageContainer';
import StyledDrawSettings from '../styled/StyledDrawSettings';
import StyledButton from '../../../core/styled/StyledButton';
import StyledInput from '../../../core/styled/StyledInput';
import StyledDrawCanvas from '../styled/StyledDrawCanvas';

interface Props extends IImageDrawWrapper {
}

const ImageDraw: React.FC<Props> = ({
                                        imageDrawSettings,
                                        undoDrawItems,
                                        setImageDrawSettings,
                                        setImage,
                                        setDrawItems,
                                        drawItems,
                                        deleteDrawItems,
                                        isErase,
                                        eraseDrawItems
                                    }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>();

    const changeImageDrawSetting = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setImageDrawSettings({[name]: value});
    }, [setImageDrawSettings]);

    const setBackground = useCallback((color: string) => {
        if (ctx) {
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        }
    }, [ctx]);

    useEffect(() => {
        if (canvasRef.current) {
            setCtx(canvasRef.current.getContext('2d'));

            if (ctx) {
                setBackground(imageDrawSettings?.backgroundColor || 'white');
                drawItems.forEach(item => draw(ctx, item.location, item.drawSettings));
            }
        }
    }, [ctx, drawItems, setCtx, imageDrawSettings, setBackground]);

    const handelDraw = useCallback((event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        if (canvasRef.current && ctx) {
            const coordinates: ICoordinates = getCoordinates(event, canvasRef.current.getBoundingClientRect());

            if (event.buttons === 1) {
                setDrawItems(
                    {
                        location: {...coordinates},
                        drawSettings: {...imageDrawSettings}
                    }
                );
            }
        }
    }, [ctx, imageDrawSettings, setDrawItems]);

    const erase = useCallback(() => eraseDrawItems(), [eraseDrawItems]);

    const clear = useCallback(() => {
            deleteDrawItems();
            setBackground('white');
        },
        [deleteDrawItems, setBackground]);

    const undo = useCallback(() => undoDrawItems(), [undoDrawItems]);

    const takeImage = useCallback(() => {
            if (canvasRef.current && ctx) {
                setImage({
                    imageData: ctx.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT),
                    imageURL: canvasRef.current.toDataURL()
                });
            }
        },
        [canvasRef, ctx, setImage]);

    return (
        <StyledImageContainer>
            <StyledDrawCanvas
                ref={canvasRef}
                onMouseMove={handelDraw}
                width={CANVAS_WIDTH}
                height={CANVAS_HEIGHT}
            />
            <StyledDrawSettings>
                <StyledDrawSettingsTitle>Settings</StyledDrawSettingsTitle>
                <StyledInput
                    placeholder="Brush radius"
                    name="brushRadius"
                    onChange={changeImageDrawSetting}
                    defaultValue={imageDrawSettings.brushRadius}
                />
                <StyledInput
                    placeholder="Brush color"
                    name="brushColor"
                    onChange={changeImageDrawSetting}
                    defaultValue={imageDrawSettings.brushColor}
                />
                <StyledInput
                    placeholder="Background color"
                    name="backgroundColor"
                    onChange={changeImageDrawSetting}
                    defaultValue={imageDrawSettings.backgroundColor}
                />
                <CheckBox onChange={erase} checked={isErase}>Erase</CheckBox>
                <StyledButton onClick={clear}>Clear</StyledButton>
                <StyledButton onClick={undo}>Undo</StyledButton>
                <StyledButton onClick={takeImage}>Take Image</StyledButton>
            </StyledDrawSettings>
        </StyledImageContainer>
    );
};

export default ImageDraw;
