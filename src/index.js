import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as createHistory from 'history'
import { Router } from 'react-router-dom'
import { InitStyles } from './Styles/global-styles';
import './Styles/alertas.css';
import { Provider } from 'react-redux'
import { store } from './redux/store';


const history = createHistory.createBrowserHistory();


ReactDOM.render(
 
    <Provider store={store}>
    <Router history={history}>

      <InitStyles/>
      <App history={history}/>
      
    </Router>
    </Provider>
  
  ,document.getElementById('root')
);



