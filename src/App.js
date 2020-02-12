import React from 'react';
import Card from './Card.js';
import bg from './assets/imgs/bg.png'
import logo from './assets/imgs/logo.png'
import aliyunlogo from './assets/imgs/aliyunlogo.png'
import alibabalogo from './assets/imgs/alibabalogo.svg'
import './App.css';
class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(props.list)
    this.state = {
      list: [
        { name: '蚂蚁金服-风险运营专家（风险研究&分析）', place: '杭州', timeStamp: 1581403939380 },
        { name: '蚂蚁金服-风险运营专家（风险研究&分析）', place: '杭州', timeStamp: 1581403939380 },
        { name: '蚂蚁金服-风险运营专家（风险研究&分析）', place: '杭州', timeStamp: 1581403939380 },
        { name: '蚂蚁金服-风险运营专家（风险研究&分析）', place: '杭州', timeStamp: 1581403939380 },
        { name: '蚂蚁金服-风险运营专家（风险研究&分析）', place: '杭州', timeStamp: 1581403939380 },
        { name: '蚂蚁金服-风险运营专家（风险研究&分析）', place: '杭州', timeStamp: 1581403939380 },
        { name: '蚂蚁金服-风险运营专家（风险研究&分析）', place: '杭州', timeStamp: 1581403939380 },
        { name: '蚂蚁金服-风险运营专家（风险研究&分析）', place: '杭州', timeStamp: 1581403939380 },
        { name: '蚂蚁金服-风险运营专家（风险研究&分析）', place: '杭州', timeStamp: 1581403939380 },
        { name: '蚂蚁金服-风险运营专家（风险研究&分析）', place: '杭州', timeStamp: 1581403939380 },
        { name: '蚂蚁金服-风险运营专家（风险研究&分析）', place: '杭州', timeStamp: 1581403939380 },
        { name: '蚂蚁金服-风险运营专家（风险研究&分析）', place: '杭州', timeStamp: 1581403939380 },
        { name: '蚂蚁金服-风险运营专家（风险研究&分析）', place: '杭州', timeStamp: 1581403939380 },
        { name: '蚂蚁金服-风险运营专家（风险研究&分析）', place: '杭州', timeStamp: 1581403939380 },
      ],
      inputValue: ''
    };
  }
  getList() {
    let { list } = this.state
    let len = list.length;
    let a = Math.random()
    let i = parseInt(a * len)
    if (a > .5 && len > 6) {
      list.splice(i, 1)
    } else {
      let nowTime = new Date().getTime()
      let obj = { name: '蚂蚁金服-风险运营专家（风险研究&分析）', place: '杭州', timeStamp: nowTime }
      list.push(obj)
    }
    this.setState({
      list
    }, () => {
    })
  }
  changeInputValue(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  render() {
    return (
      <div className="App">


        <div className="header">
          <div className="header-content">
            <div className="header-menus">
              <img className="logo" src={logo}></img>
              <div className="cn-name">社招官网</div>
              <div className="menus">
                <div className="active">首&nbsp;&nbsp;&nbsp;&nbsp;页</div>
                <div>社会招聘</div>
                <div>校园招聘</div>
                <div>了解阿里</div>
                <div>个人中心</div>
              </div>
            </div>
            <div className="login-btns">
              <div>欢迎来到阿里巴巴集团招聘！</div>
              <div className="btns">
                <div>登录</div>&nbsp;|&nbsp;<div>注册</div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-item" style={{ backgroundImage: `url(${bg})` }}>
          <div className="search-item-content">
            <div className="search-item-container">
              <div className="text">
                <div>If not now, when?</div>
                <div>If not me, who?</div>
                <div>此时此刻，非我莫属！</div>
              </div>
              <div className="search-input-content">
                <input size="large" placeholder="请输入职位关键词" value={this.state.inputValue} onChange={this.changeInputValue.bind(this)} /><button size="large">搜索</button>
              </div>
              <div className="hot-search">
                <div>热门搜索：</div>
                <div>
                  <div>JAVA</div>
                  <div>IOS</div>
                  <div>数据</div>
                  <div>安全</div>
                  <div>搜索</div>
                  <div>算法</div>
                  <div>运营</div>
                  <div>视觉</div>
                  <div>交互</div>
                  <div>前端</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="flex-container">
            <Card list={this.state.list} getList={this.getList.bind(this)} />
            <div className="right-container">
              <div>
                <img src={aliyunlogo} alt="" />
              </div>
              <div>
                <img src={alibabalogo} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          by 费华兵
        </div>
      </div>
    )
  }
}

export default App;
