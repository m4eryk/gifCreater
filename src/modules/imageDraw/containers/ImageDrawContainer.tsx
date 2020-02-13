import {setImage, setImageDrawSettings} from '../action/imagerDrawAction';
import {getImageDrawSettings} from '../selectors/imageDrawSelectors';
import {Dispatch} from 'redux';
import {IStore} from '../../../core/interface/IStore';
import {IDrawSettings} from '../interface/IDrawSettings';
import {connect} from 'react-redux';
import {IImage} from '../interface/IImage';
import ImageDrawWrapper from '../components/ImageDrawWrapper';

const mapStateToProps = (state: IStore) => ({
    imageDrawSettings: getImageDrawSettings(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setImageDrawSettings: (setting: IDrawSettings) => dispatch(setImageDrawSettings(setting)),
    setImage: (image: IImage) => dispatch(setImage(image))
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageDrawWrapper);
