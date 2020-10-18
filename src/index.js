// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import { Provider} from 'react-redux'
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

// We are passing our createStore method the shoppingListItemReducer-reducer method as an argument.
//Then we place it in a varible called 'store'.
const store = createStore(shoppingListItemReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
