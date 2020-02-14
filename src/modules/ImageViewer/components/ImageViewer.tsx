import React, {useCallback} from 'react';
import {createIdGenerator} from '../../../core/utils/idGenerator';
import {IImage} from '../../imageDraw/interface/IImage';
import StyledImageViewContainer from '../styled/StyledImageViewContainer';
import StyledButton from '../../../core/styled/StyledButton';
import StyledImageView from '../styled/StyledImageView';
import StyledImage from '../styled/StyledImage';

interface Props {
    imageArray: IImage[],
    deleteImage: () => void,
    createGifUrl: () => void
}

const idGenerator = createIdGenerator();

const ImageViewer: React.FC<Props> = ({deleteImage, imageArray, createGifUrl}) => {
    const mapImage = useCallback((image: IImage) => (
        <StyledImage key={idGenerator.next().value} src={image.imageURL} alt="..."/>
    ), []);

    const handleButton = useCallback((): void => createGifUrl(), [createGifUrl]);

    return (
        <StyledImageViewContainer>
            <StyledImageView>
                {imageArray.map(mapImage)}
            </StyledImageView>
            <StyledButton onClick={deleteImage}>Очистить</StyledButton>
            <StyledButton onClick={handleButton}>Create gif</StyledButton>
        </StyledImageViewContainer>
    );
};

ImageViewer.defaultProps = {
    imageArray: [],
};

export default ImageViewer;
