import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';  
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';
import { reducer } from './reducers/index';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware),
    // other store enhancers if any
);

const store = createStore(reducer, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root'));

registerServiceWorker();
