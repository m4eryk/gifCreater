import React, {useMemo} from 'react';
import {getImageArray} from '../../modules/ImageViewer/selectors/imageViewerSelectors';
import {useSelector} from 'react-redux';
import {Redirect, Route, RouteProps} from 'react-router-dom';
import {ROUTES} from '../constants/routeConstants';

const GifEditorProvider: React.FC<RouteProps> = ({component, ...rest}) => {
    const imageArray = useSelector(getImageArray);

    return useMemo(() => {
            if (imageArray.length) {
                return <Route {...rest} component={component} />;
            }

            return <Redirect to={ROUTES.MAIN}/>;
        }, [imageArray, component, rest]
    );
};

export default GifEditorProvider;
