import {IStore} from '../../../core/interface/IStore';
import GifEditor from '../components/GifEditor';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {setGifSetting} from '../action/gifEditorAction';
import {IGifSetting} from '../interface/IGifSetting';
import {getGifSetting, getGifUrl} from '../selectors/gifEditorSelectors';

const mapStateToProps = (state: IStore) => ({
    gif: getGifUrl(state),
    gifSetting: getGifSetting(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setGifSetting: (setting: IGifSetting) => dispatch(setGifSetting(setting)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GifEditor);
