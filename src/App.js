import React from 'react';

import { Add ,Remove } from './redux'

import {connect} from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <div>
         Readux实战中使用方法
        <br/>
          {this.props.counter}
        <br/>
        <input onClick={this.props.Add} type="button" value='加'/>
        <input onClick={this.props.Remove} type="button" value='减'/>
      </div>
    );
  }
}

//这里需要用react-redux的 connect来连接 可以接受常用的两个参数
//这个获取state的值
const mapStateToProps=(store)=>{
    return {counter:store.counter}
}

const mapDispatchToProps={ Add , Remove }

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
