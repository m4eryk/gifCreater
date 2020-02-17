import {
    setImageDrawSettings,
    setDrawItems,
    deleteDrawItems,
    undoDrawItems,
    eraseDrawItems
} from '../action/imagerDrawAction';
import {getDrawItems, getImageDrawSettings, isErase} from '../selectors/imageDrawSelectors';
import {setImage} from '../../ImageViewer/action/imageViewrActions';
import ImageDrawWrapper from '../components/ImageDrawWrapper';
import {IDrawSettings} from '../interface/IDrawSettings';
import {IStore} from '../../../core/interface/IStore';
import {IDrawItem} from '../interface/IDrawItem';
import {IImage} from '../interface/IImage';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

const mapStateToProps = (state: IStore) => ({
    imageDrawSettings: getImageDrawSettings(state),
    drawItems: getDrawItems(state),
    isErase: isErase(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setImageDrawSettings: (setting: IDrawSettings) => dispatch(setImageDrawSettings(setting)),
    setImage: (image: IImage) => dispatch(setImage(image)),
    setDrawItems: (drawItem: IDrawItem) => dispatch(setDrawItems(drawItem)),
    deleteDrawItems: () => dispatch(deleteDrawItems()),
    eraseDrawItems: () => dispatch(eraseDrawItems()),
    undoDrawItems: () => dispatch(undoDrawItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageDrawWrapper);
