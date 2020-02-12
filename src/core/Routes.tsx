import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {ROUTES} from './constants/routeConstants';
import ImageDrawContainer from '../modules/imageDraw/containers/ImageDrawContainer';
import GifEditorContainer from '../modules/gifEditor/containers/GifEditorContainer';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path={ROUTES.MAIN} component={ImageDrawContainer} exact/>
                <Route path={ROUTES.GIF_EDITOR} component={GifEditorContainer} exact/>
                <Redirect to={ROUTES.MAIN} from="8"/>
            </Switch>
        </Router>
    );
};

export default Routes;
