import React, {useCallback} from 'react';
import {createIdGenerator} from '../../../core/utils/idGenerator';
import {IImage} from '../../imageDraw/interface/IImage';
import StyledImageViewContainer from '../styled/StyledImageViewContainer';
import StyledButton from '../../../core/styled/StyledButton';
import StyledImageView from '../styled/StyledImageView';
import StyledImage from '../styled/StyledImage';

interface Props {
    imageArray: IImage[];
    deleteImageArray: () => void;
    createGifUrl: () => void;
    undoImage: () => void;
}

const idGenerator = createIdGenerator();

const ImageViewer: React.FC<Props> = ({deleteImageArray, imageArray, createGifUrl, undoImage}) => {
    const mapImage = useCallback((image: IImage) => (
        <StyledImage key={idGenerator.next().value} src={image.imageURL} alt="..."/>
    ), []);

    const handleCreateGif = useCallback((): void => createGifUrl(), [createGifUrl]);

    const handleUndoImage = useCallback((): void => undoImage(), [undoImage]);

    return (
        <StyledImageViewContainer>
            <StyledImageView>
                {imageArray.map(mapImage)}
            </StyledImageView>
            <StyledButton onClick={deleteImageArray}>Clear</StyledButton>
            <StyledButton onClick={handleUndoImage}>Undo</StyledButton>
            <StyledButton onClick={handleCreateGif}>Create gif</StyledButton>
        </StyledImageViewContainer>
    );
};

ImageViewer.defaultProps = {
    imageArray: [],
};

export default ImageViewer;
