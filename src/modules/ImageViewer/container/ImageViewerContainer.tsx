import {IStore} from '../../../core/interface/IStore';
import {getImageArray} from '../../imageDraw/selectors/imageDrawSelectors';
import {deleteImage} from '../../imageDraw/action/imagerDrawAction';
import {createGif} from '../../gifEditor/action/gifEditorAction';
import {Dispatch} from 'redux';
import {IImage} from '../../imageDraw/interface/IImage';
import {IDeleteImage} from '../../imageDraw/interface/IImageDrawActionType';
import {ICreateGif} from '../../gifEditor/interface/IGifEditorActionTypes';
import ImageViewer from '../components/ImageViewer';
import {connect} from 'react-redux';

const mapStateToProps = (state: IStore) => ({
    imageArray: getImageArray(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    createGifUrl: (gifUrl: IImage[]): ICreateGif => dispatch(createGif(gifUrl)),
    deleteImage: (): IDeleteImage => dispatch(deleteImage())
});


export default connect(mapStateToProps, mapDispatchToProps)(ImageViewer);
