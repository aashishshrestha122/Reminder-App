import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import reducer from './reducers';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
