import React from "react";
import ReactDOM from "react-dom";
import App from './containers/app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import tasks from './reducers';


const data = new Date().toLocaleString();
const initialState = [

    {author: 'God', text: 'Everlasting Light!', date: data}
    
    ];

const store = createStore(tasks, initialState);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.querySelector('#root')
);
