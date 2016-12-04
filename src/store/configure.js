import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const logger = createLogger();
    const middleware = routerMiddleware(browserHistory);
    const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware, middleware, logger));
    
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            console.log(nextRootReducer);
            store.replaceReducer(nextRootReducer);
        });
    }
    
    return store;
}