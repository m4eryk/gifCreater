import {setImage, setImageDrawSettings, setDrawItems, deleteDrawItems, undoDrawItems} from '../action/imagerDrawAction';
import {getDrawItems, getImageDrawSettings} from '../selectors/imageDrawSelectors';
import ImageDrawWrapper from '../components/ImageDrawWrapper';
import {IDrawSettings} from '../interface/IDrawSettings';
import {IStore} from '../../../core/interface/IStore';
import {IImage} from '../interface/IImage';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {IDrawItem} from '../interface/IDrawItem';

const mapStateToProps = (state: IStore) => ({
    imageDrawSettings: getImageDrawSettings(state),
    drawItems: getDrawItems(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setImageDrawSettings: (setting: IDrawSettings) => dispatch(setImageDrawSettings(setting)),
    setImage: (image: IImage) => dispatch(setImage(image)),
    setDrawItems: (drawItem: IDrawItem) => dispatch(setDrawItems(drawItem)),
    deleteDrawItems: () => dispatch(deleteDrawItems()),
    undoDrawItems: () => dispatch(undoDrawItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageDrawWrapper);
