import React from 'react';
import StyledImageWrapper from '../styled/StyledImageWrapper';
import ImageDraw from './ImageDraw';
import ImageViewerContainer from '../../ImageViewer/container/ImageViewerContainer';
import {IDrawSettings} from '../interface/IDrawSettings';
import {IImage} from '../interface/IImage';
import {IDrawItem} from '../interface/IDrawItem';

export interface IImageDrawWrapper {
    drawItems: IDrawItem[];
    imageDrawSettings: IDrawSettings;
    setImageDrawSettings: (setting: IDrawSettings) => void;
    setImage: (image: IImage) => void;
    setDrawItems: (drawItem: IDrawItem) => void;
    deleteDrawItems: () => void;
    undoDrawItems: () => void;
}

const ImageDrawWrapper: React.FC<IImageDrawWrapper> = ({
    setImage,
    setImageDrawSettings,
    imageDrawSettings,
    setDrawItems,
    drawItems,
    deleteDrawItems,
    undoDrawItems
}) => {
    return (
        <StyledImageWrapper>
            <ImageDraw
                setImage={setImage}
                setImageDrawSettings={setImageDrawSettings}
                setDrawItems={setDrawItems}
                imageDrawSettings={imageDrawSettings}
                drawItems={drawItems}
                deleteDrawItems={deleteDrawItems}
                undoDrawItems={undoDrawItems}
            />
            <ImageViewerContainer/>
        </StyledImageWrapper>
    );
};

export default ImageDrawWrapper;
