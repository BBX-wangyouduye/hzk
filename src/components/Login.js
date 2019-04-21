import React, { Component } from 'react'

import { Flex, NavBar, List, InputItem, Button,WingBlank, Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import './Login.css'
import axios from '../http';
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uname: '',
      pwd: ''
    }
  }
  changeInputValue = (key, val) => {
    this.setState({
      [key]: val
    })
  }

  handleLogin = async() => {
    const {data:{data, meta}} = await axios.post(`users/login`, {
      uname: this.state.uname,
      pwd: this.state.pwd
    })
    // console.log(data, meta)
    if (meta.status === 200) {
      // console.log(this.props)
      // data 中有自带的token 将来可以用
      console.log(data)
      localStorage.setItem('token', data.token)
      localStorage.setItem('uid', data.uid)

      const { history } = this.props
      history.push('/')
    } else {
      Toast.fail(meta.msg, 3)
    }
  }
  render() {
    return (
      <div>
        <WingBlank size="sm">
          <Flex direction="column" justify="center">
            <Flex.Item><NavBar mode="light">登录</NavBar></Flex.Item>
            <Flex.Item>
              <List>
                <InputItem value={this.state.uname} onChange={val => {
                  this.changeInputValue('uname', val)
                }}>姓名</InputItem>
                <InputItem value={this.state.pwd} onChange={val => {
                  this.changeInputValue('pwd', val)
                }}>密码</InputItem>
              </List>
              <Button type="primary" onClick={this.handleLogin}>登录</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
      </div>

    )
  }
}

export default Login
