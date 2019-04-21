/* eslint-disable no-unreachable */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'

import Main from './main/main'
import News from './news/news'
import Chat from './chat/chat'
import Mine from './mine/mine'
import './home.css'

import { tabBarTemplateData } from './tabBarTemplateData'
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'Chat',
      hidden: false,
      fullScreen: false,
    }
  }
  renderContent(tabTitle) {
    const key = this.state.selectedTab
    switch (key) {
      case 'Main':
        return <Main/>
        break
      case 'News':
        return <News/>
        break
      case 'Chat':
        return <Chat title={tabTitle}/>
        break
      case 'Mine':
        return <Mine/>
        break
      default:
        break;
    }
  }
  render() {
    const tabBarTemplate = tabBarTemplateData.map((item, i) => {
      return (
        <TabBar.Item
          title={item.title}
          key={item.key}
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: `${item.icon_bg_url}`}}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: `${item.selectedIcon_bg_url}`}}
          />
          }
          selected={this.state.selectedTab === item.selectedPath}
          onPress={() => {
            this.setState({
              selectedTab: `${item.selectedPath}`,
            });
          }}
          data-seed="logId"
          >
            {this.renderContent(item.key)}
        </TabBar.Item>
      )
    })
    return (
      <div>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          tabBarPosition="top"
        >
        {tabBarTemplate}
        </TabBar>
      </div>
    )
  }
}

export default Home

/*
    <TabBar.Item
      title="Main"
      key="Main"
      icon={<div style={{
        width: '22px',
        height: '22px',
        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
      />
      }
      selectedIcon={<div style={{
        width: '22px',
        height: '22px',
        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
      />
      }
      selected={this.state.selectedTab === 'Main'}
      onPress={() => {
        this.setState({
          selectedTab: 'Main',
        });
      }}
      data-seed="logId"
      >
        {this.renderContent('Main')}
    </TabBar.Item>
    <TabBar.Item
    icon={
      <div style={{
        width: '22px',
        height: '22px',
        background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
      />
    }
    selectedIcon={
      <div style={{
        width: '22px',
        height: '22px',
        background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
      />
    }
    title="News"
    key="News"
    selected={this.state.selectedTab === 'News'}
    onPress={() => {
      this.setState({
        selectedTab: 'News',
      });
    }}
    data-seed="logId1"
  >
    {this.renderContent('News')}
  </TabBar.Item>
    <TabBar.Item
      icon={
        <div style={{
          width: '22px',
          height: '22px',
          background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
        />
      }
      selectedIcon={
        <div style={{
          width: '22px',
          height: '22px',
          background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
        />
      }
      title="Chat"
      key="Chat"
      selected={this.state.selectedTab === 'Chat'}
      onPress={() => {
        this.setState({
          selectedTab: 'Chat',
        });
      }}
    >
      {this.renderContent('Chat')}
    </TabBar.Item>
    <TabBar.Item
      icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
      selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
      title="Mine"
      key="Mine"
      selected={this.state.selectedTab === 'Mine'}
      onPress={() => {
        this.setState({
          selectedTab: 'Mine',
        });
      }}
    >
      {this.renderContent('Mine')}
    </TabBar.Item>

 */
