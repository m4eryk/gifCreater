import React from 'react';
import ImageViewerContainer from '../../ImageViewer/container/ImageViewerContainer';
import {setImage, setImageDrawSettings} from '../action/imagerDrawAction';
import {getImageDrawSettings} from '../selectors/imageDrawSelectors';
import {Dispatch} from 'redux';
import {IStore} from '../../../core/interface/IStore';
import {IDrawSettings} from '../interface/IDrawSettings';
import ImageDraw from '../components/ImageDraw';
import {connect} from 'react-redux';
import StyledImageWrapper from '../styled/StyledImageWrapper';
import {IImage} from '../interface/IImage';

const mapStateToProps = (state: IStore) => ({
    imageDrawSettings: getImageDrawSettings(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setImageDrawSettings: (setting: IDrawSettings) => dispatch(setImageDrawSettings(setting)),
    setImage: (image: IImage) => dispatch(setImage(image))
});

interface Props {
    imageDrawSettings: IDrawSettings,
    setImageDrawSettings: (setting: IDrawSettings) => void,
    setImage: (image: IImage) => void;
}

const ImageDrawContainer: React.FC<Props> = ({setImage, setImageDrawSettings, imageDrawSettings}) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(ImageDrawContainer);
