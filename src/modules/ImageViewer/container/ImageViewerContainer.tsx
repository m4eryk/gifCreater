import {IStore} from '../../../core/interface/IStore';
import {getImageArray} from '../../imageDraw/selectors/imageDrawSelectors';
import ImageViewer from '../components/ImageViewer';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {deleteImage} from '../../imageDraw/action/imagerDrawAction';
import React from 'react';
import StyledButton from '../../../core/styled/StyledButton';
import StyledImageViewContainer from '../styled/StyledImageViewContainer';
import {createGifUrl} from '../../gifEditor/action/gifEditorAction';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../../core/constants/routeConstants';
import {IImage} from '../../imageDraw/interface/IImage';

const mapStateToProps = (state: IStore) => ({
    imageArray: getImageArray(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    createGifUrl: (gifUrl: IImage[]) => dispatch(createGifUrl(gifUrl)),
    deleteImage: () => dispatch(deleteImage())
});

interface Props {
    imageArray: IImage[],
    deleteImage: () => void,
    createGifUrl: (gifUrl: IImage[]) => void
}

const ImageViewContainer: React.FC<Props> = ({deleteImage, imageArray, createGifUrl}) => {

    const handleButton = () => createGifUrl(imageArray);

    return (
        <StyledImageViewContainer>
            <ImageViewer imageArray={imageArray}/>
            <StyledButton onClick={deleteImage}>Очистить</StyledButton>
            <Link to={ROUTES.GIF_EDITOR}>
                <StyledButton onClick={handleButton}>Create gif</StyledButton>
            </Link>
        </StyledImageViewContainer>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageViewContainer);
