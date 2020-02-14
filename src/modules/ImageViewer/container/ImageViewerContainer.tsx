import {IStore} from '../../../core/interface/IStore';
import {getImageArray} from '../../imageDraw/selectors/imageDrawSelectors';
import {deleteImageArray} from '../../imageDraw/action/imagerDrawAction';
import {createGif} from '../../gifEditor/action/gifEditorAction';
import {Dispatch} from 'redux';
import {IDeleteImageArray} from '../../imageDraw/interface/IImageDrawActionType';
import {ICreateGif} from '../../gifEditor/interface/IGifEditorActionTypes';
import ImageViewer from '../components/ImageViewer';
import {connect} from 'react-redux';

const mapStateToProps = (state: IStore) => ({
    imageArray: getImageArray(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    createGifUrl: (): ICreateGif => dispatch(createGif()),
    deleteImageArray: (): IDeleteImageArray => dispatch(deleteImageArray())
});


export default connect(mapStateToProps, mapDispatchToProps)(ImageViewer);
