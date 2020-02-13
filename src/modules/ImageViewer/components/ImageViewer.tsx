import React, {useCallback} from 'react';
import StyledImage from '../styled/StyledImage';
import StyledImageView from '../styled/StyledImageView';
import {createIdGenerator} from '../../../core/utils/idGenerator';
import {IImage} from '../../imageDraw/interface/IImage';
import StyledImageViewContainer from '../styled/StyledImageViewContainer';
import StyledButton from '../../../core/styled/StyledButton';

interface Props {
    imageArray: IImage[],
    deleteImage: () => void,
    createGifUrl: (gifUrl: IImage[]) => void
}

const idGenerator = createIdGenerator();

const ImageViewer: React.FC<Props> = ({deleteImage, imageArray, createGifUrl}) => {
    const mapImage = useCallback((image: IImage) => (
        <StyledImage key={idGenerator.next().value} src={image.imageURL} alt="..."/>
    ), []);

    const handleButton = useCallback((): void => createGifUrl(imageArray), [createGifUrl, imageArray]);

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
