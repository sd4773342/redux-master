import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import App from "./App";
import { counter } from "./index.redux";

//redux谷歌浏览器插件配置
const reduxDevtools = window.devToolsExtension
  ? window.devToolsExtension()
  : () => { };
const store = createStore(counter, compose(applyMiddleware(thunk), reduxDevtools))

function Bpage() {
  return <h2>B页面</h2>
}

function Cpage() {
  return <h2>B页面</h2>
}

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/" >首页</Link></li>
          <li><Link to="/b" >B页面</Link></li>
          <li><Link to="/c" >C页面</Link></li>
        </ul>
        <Route path="/" exact component={App} />
        <Route path="/b" exact component={Bpage} />
        <Route path="/c" exact component={Cpage} />
      </div>
    </BrowserRouter >
  </Provider>
), document.getElementById("root"));
