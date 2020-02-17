import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {history} from './utils/historyUtils';
import {Location} from 'history';
import {ROUTES} from './constants/routeConstants';
import {ConnectedRouter} from 'connected-react-router';
import ImageDrawContainer from '../modules/imageDraw/containers/ImageDrawContainer';
import GifEditorContainer from '../modules/gifEditor/containers/GifEditorContainer';
import GifEditorProvider from './HOC/GifEditorProvider';

interface Props {
    location: Location;
}

const Routes: React.FC<Props> = ({location}: Props) => (
    <ConnectedRouter history={history}>
        <Switch location={location}>
            <Route path={ROUTES.MAIN} component={ImageDrawContainer} exact/>
            <GifEditorProvider>
                <Route path={ROUTES.GIF_EDITOR} component={GifEditorContainer} exact/>
            </GifEditorProvider>
            <Redirect to={ROUTES.MAIN} from="*"/>
        </Switch>
    </ConnectedRouter>
);

export default Routes;
