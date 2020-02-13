import React from 'react';
import ImageViewer from '../components/ImageViewer';
import {IStore} from '../../../core/interface/IStore';
import {getImageArray} from '../../imageDraw/selectors/imageDrawSelectors';
import {deleteImage} from '../../imageDraw/action/imagerDrawAction';
import {createGifUrl} from '../../gifEditor/action/gifEditorAction';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {IImage} from '../../imageDraw/interface/IImage';
import {IDeleteImage} from '../../imageDraw/interface/IImageDrawActionType';
import {ICreateGif} from '../../gifEditor/interface/IGifEditorActionTypes';
import StyledImageViewContainer from '../styled/StyledImageViewContainer';
import StyledButton from '../../../core/styled/StyledButton';

const mapStateToProps = (state: IStore) => ({
    imageArray: getImageArray(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    createGifUrl: (gifUrl: IImage[]): ICreateGif => dispatch(createGifUrl(gifUrl)),
    deleteImage: (): IDeleteImage => dispatch(deleteImage())
});

interface Props {
    imageArray: IImage[],
    deleteImage: () => void,
    createGifUrl: (gifUrl: IImage[]) => void
}

const ImageViewContainer: React.FC<Props> = ({deleteImage, imageArray, createGifUrl}) => {

    const handleButton = (): void => createGifUrl(imageArray);

    return (
        <StyledImageViewContainer>
            <ImageViewer imageArray={imageArray}/>
            <StyledButton onClick={deleteImage}>Очистить</StyledButton>
            <StyledButton onClick={handleButton}>Create gif</StyledButton>
        </StyledImageViewContainer>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageViewContainer);
