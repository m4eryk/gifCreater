import React from 'react';
import StyledImageWrapper from '../styled/StyledImageWrapper';
import ImageDraw from './ImageDraw';
import ImageViewerContainer from '../../ImageViewer/container/ImageViewerContainer';
import {IDrawSettings} from '../interface/IDrawSettings';
import {IImage} from '../interface/IImage';

export interface IImageDrawWrapper {
    imageDrawSettings: IDrawSettings,
    setImageDrawSettings: (setting: IDrawSettings) => void,
    setImage: (image: IImage) => void;
}

const ImageDrawWrapper: React.FC<IImageDrawWrapper> = ({setImage, setImageDrawSettings, imageDrawSettings}) => {
    return (
        <StyledImageWrapper>
            <ImageDraw
                setImage={setImage}
                setImageDrawSettings={setImageDrawSettings}
                imageDrawSettings={imageDrawSettings}
            />
            <ImageViewerContainer/>
        </StyledImageWrapper>
    );
};

export default ImageDrawWrapper;
