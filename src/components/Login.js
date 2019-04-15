import React, { Component } from 'react'

import { Flex, NavBar, List, InputItem, Button,WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import './Login.css'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <WingBlank size="sm">
          <Flex direction="column" justify="center">
            <Flex.Item><NavBar mode="light">登录</NavBar></Flex.Item>
            <Flex.Item>
              <List>
                <InputItem>姓名</InputItem>
                <InputItem>密码</InputItem>
              </List>
              <Button type="primary">登录</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
      </div>

    )
  }
}

export default Login
