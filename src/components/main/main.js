import React, { Component } from 'react'
import { SearchBar, Carousel, Grid } from 'antd-mobile'

import axios from '../../http'
class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgHeight: 176,
      swipeData: [],
      menuData:[],
      data: Array.from(new Array(9)).map((_val, i) => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `name${i}`,
    }))
    }
  }
  getMainData = async (path) => {
    const { data:{data, meta }} = await axios.post(path)
    // console.log(data,meta)
    if (meta.status === 200) {
      return data.list
    }
  }
  async componentDidMount() {
    const swipeData = this.getMainData(`homes/swipe`)
    const menuData = this.getMainData(`homes/menu`)
    const mainData = await Promise.all([swipeData, menuData])
    console.log(mainData)
    this.setState({
      swipeData: mainData[0],
      menuData: mainData[1]
    },
    () => {
      let temp = this.state.menuData.map((item, i)=> {
        return {
          icon: `http://127.0.0.1:8086/public/0${i + 1}.png`,
          text: item.menu_name
        }
      })
      this.setState({
        data: temp
      })
    }
  )}
  render() {
    const carouselTemplate = this.state.swipeData.map((val, i) => (
      <a
        key={i}
        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
      >
        <img
          src={val.original}
          alt=""
          style={{ width: '100%', verticalAlign: 'top' }}
          onLoad={() => {
            // fire window resize event to change height
            window.dispatchEvent(new Event('resize'))
            this.setState({ imgHeight: 'auto' })
          }}
        />
      </a>
    ))
    return (
      <div>
        {/* 搜索框 */}
        <SearchBar
          placeholder="请输入搜索内容"
          ref={ref => (this.autoFocusInst = ref)}
        />
        {/* 轮播图 */}
        <Carousel
          autoplay={true}
          infinite>
          {carouselTemplate}
        </Carousel>
        {/* 菜单 */}
        <Grid data={this.state.data} activeStyle={false} />
      </div>
    )
  }
}
export default Main
