import {IStore} from '../../../core/interface/IStore';
import {deleteImageArray, undoImage} from '../action/imageViewrActions';
import {getImageArray} from '../selectors/imageViewerSelectors';
import {createGif} from '../../gifEditor/action/gifEditorAction';
import {Dispatch} from 'redux';
import {IDeleteImageArray, IUndoImage} from '../interface/IImageViewerActionType';
import {ICreateGif} from '../../gifEditor/interface/IGifEditorActionTypes';
import ImageViewer from '../components/ImageViewer';
import {connect} from 'react-redux';

const mapStateToProps = (state: IStore) => ({
    imageArray: getImageArray(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    createGifUrl: (): ICreateGif => dispatch(createGif()),
    undoImage: (): IUndoImage => dispatch(undoImage()),
    deleteImageArray: (): IDeleteImageArray => dispatch(deleteImageArray())
});


export default connect(mapStateToProps, mapDispatchToProps)(ImageViewer);
