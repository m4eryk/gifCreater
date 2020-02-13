import React from 'react';
import Store from './Store';
import RoutesContainer from './containers/RoutesContainer';

const App: React.FC = () => (
    <Store>
        <RoutesContainer/>
    </Store>
);

export default App;
