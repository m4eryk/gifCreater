import {connect} from 'react-redux';
import {Location} from 'history';
import {IStore} from '../interface/IStore';
import {getLocation} from '../selectors/routerSelectors';
import Routes from '../../core/Routes';

interface StateProps {
    location: Location;
}

const mapStateToProps = (store: IStore): StateProps => ({
    location: getLocation(store),
});

export default connect(mapStateToProps)(Routes);
