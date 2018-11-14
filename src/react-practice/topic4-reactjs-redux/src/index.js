import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './IndexPage';

//Redux
import store from './store';
import { Provider } from 'react-redux';


ReactDOM.render(
    <Provider store={store}>
        <IndexPage />
    </Provider>, 
    document.getElementById('root'));

