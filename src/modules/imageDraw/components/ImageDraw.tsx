import React, {ChangeEvent, useCallback, useRef, useEffect, useState, useMemo} from 'react';
import {draw, getCoordinates, ICoordinates} from '../utils/drawUtils';
import {IDrawSettings} from '../interface/IDrawSettings';
import {IImage} from '../interface/IImage';
import StyledDrawSettingsTitle from '../styled/StyledDrawSettingsTitle';
import StyledImageContainer from '../styled/StyledImageContainer';
import StyledDrawSettings from '../styled/StyledDrawSettings';
import StyledButton from '../../../core/styled/StyledButton';
import StyledInput from '../../../core/styled/StyledInput';

interface Props {
    imageDrawSettings: IDrawSettings,
    setImageDrawSettings: (setting: IDrawSettings) => void,
    setImage: (image: IImage) => void;
}

const ImageDraw: React.FC<Props> = ({imageDrawSettings, setImageDrawSettings, setImage}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>();

    const changeImageDrawSetting = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setImageDrawSettings({[name]: value});
    }, [setImageDrawSettings]);

    const setBackground = useCallback((color: string) => {
        console.log(color);
        if (ctx && canvasRef.current) {
            ctx.fillStyle = color;
            ctx.fillRect(0,0,400,400);
        }
    }, [ctx]);

    useEffect(() => {
        if (canvasRef.current) {
            setCtx(canvasRef.current.getContext('2d'));

            if (ctx) {
                ctx.strokeStyle = imageDrawSettings.brushColor ? imageDrawSettings.brushColor : 'black';
                setBackground(imageDrawSettings.backgroundColor ? imageDrawSettings.backgroundColor : 'white');
            }
        }
    }, [setCtx, ctx, imageDrawSettings, setBackground]);

    const handelDraw = useCallback((event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        if (canvasRef.current && ctx) {
            const coordinates: ICoordinates = getCoordinates(event, canvasRef.current.getBoundingClientRect());

            if (event.buttons === 1) {
                draw(ctx, coordinates, imageDrawSettings);
            } else {
                ctx.moveTo(coordinates.x, coordinates.y);
            }
        }
    }, [ctx, imageDrawSettings]);

    const clear = useMemo(() => () => {
        if (ctx) {
            ctx.clearRect(0, 0, 400, 400);
            setBackground('white');
        }
    }, [ctx, setBackground]);

    const takeImage = () => {
        if (canvasRef.current && ctx) {
            setImage({
                imageData: ctx.getImageData(0, 0, 400, 400),
                imageURL: canvasRef.current.toDataURL()
            });
        }
    };

    return (
        <StyledImageContainer>
            <canvas
                ref={canvasRef}
                onMouseMove={handelDraw}
                width={400}
                height={400}
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
                <StyledInput
                    placeholder="Image url"
                    name="backgroundColor"
                    onChange={changeImageDrawSetting}
                    defaultValue={imageDrawSettings.imgSrc}
                />
                <StyledButton onClick={clear}>Clear</StyledButton>
                <StyledButton onClick={takeImage}>Take Image</StyledButton>
            </StyledDrawSettings>
        </StyledImageContainer>
    );
};

ImageDraw.defaultProps = {
    imageDrawSettings: {
        brushColor: 'black',
        brushRadius: 10,
        backgroundColor: 'white'
    }
};

export default ImageDraw;
