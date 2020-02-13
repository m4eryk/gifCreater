import React from 'react';
import StyledImage from '../styled/StyledImage';
import StyledImageView from '../styled/StyledImageView';
import { createIdGenerator } from '../../../core/utils/idGenerator';
import { IImage } from '../../imageDraw/interface/IImage';

interface Props {
    imageArray: IImage[],
}

const idGenerator = createIdGenerator();
    
const ImageViewer: React.FC<Props> = ({imageArray}) => {
    const mapImage = useCallback((image: IImage) => (
        <StyledImage key={idGenerator.next().value} src={image.imageURL} alt="..."/>
    ));

    return (
        <StyledImageView>
            {imageArray.map(mapImage)}
        </StyledImageView>
    );
};

ImageViewer.defaultProps = {
    imageArray: [],
};

export default ImageViewer;
