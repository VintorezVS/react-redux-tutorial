import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import RequireAuth from './components/RequireAuth';
import App from './containers/App';
import Login from './containers/Login';
import Photos from './containers/Photos';
import Audios from './containers/Audios';
import { INDEX, LOGIN, PHOTO, AUDIO } from './constants/Routes';

export default (
    <div>
        <Route path={INDEX} component={App}>
            <IndexRedirect to={LOGIN} />
            <Route path={LOGIN} component={Login} />
            <Route path={PHOTO} component={RequireAuth(Photos)} />
            <Route path={AUDIO} component={RequireAuth(Audios)} />
        </Route>
    </div>
);