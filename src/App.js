import React, { Component } from 'react';
import { connect } from "react-redux";
import { addGun, removeGun, addGunAsync } from "./index.redux";
const mapStatetoProps = (state) => {
  return { num: state }
}
const actionCreators = { addGun, removeGun, addGunAsync }
@connect(mapStatetoProps, actionCreators)//第一个参数-需要state的什么属性放到props中，第二个参数-需要什么方法放到props中

class App extends Component {
  render() {
    return (
      <div>
        <h1>测试数据:{this.props.num}
        </h1>
        <button onClick={this.props.addGun}>新增数据</button>&nbsp;&nbsp;
        <button onClick={this.props.removeGun}>减少数据</button>&nbsp;&nbsp;
        <button onClick={this.props.addGunAsync}>2秒后增加数据</button>
      </div>
    );
  }
}


export default App;
