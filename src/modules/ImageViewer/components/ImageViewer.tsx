import React from 'react';
import StyledImage from '../styled/StyledImage';
import StyledImageView from '../styled/StyledImageView';
import {createIdGenerator} from '../../../core/utils/idGenerator';
import {IImage} from '../../imageDraw/interface/IImage';

interface Props {
    imageArray: IImage[],
}

const idGenerator = createIdGenerator();

const mapImage = (imageArray: IImage[]) => imageArray.map(item => <StyledImage key={idGenerator.next().value} src={item.imageURL} alt="..."/>);

const ImageViewer: React.FC<Props> = ({imageArray}) => {
    return (
        <StyledImageView>
            {imageArray && mapImage(imageArray)}
        </StyledImageView>
    );
};

export default ImageViewer;
