import React from 'react';
class Cards extends React.Component {

  constructor(props) {
    super(props);
    console.log(props.list)
    this.state = { top: 0, list: props.list, timer: null };
  }

  componentDidMount() {
    console.log(1)
    this.startScroll()
  }
  setTime(ts) {
    let nowTime = new Date().getTime()
    let minutes = Math.ceil((nowTime - ts) / 60000)
    let str = minutes + '分钟'
    if (minutes >= 60 && minutes < 1440) {
      str = parseInt(minutes / 60) + '小时' + minutes % 60 + '分钟'
    }
    if (minutes >= 1440) {
      str = parseInt(minutes / 1440) + '天' + parseInt((minutes % 1440) / 60) + '小时' + minutes % 60 + '分钟'
    }
    return str
  }
  stopScroll() {
    let { timer } = this.state;
    clearInterval(timer)
    this.setState({ timer: null })
  }
  startScroll() {
    let t0 = setInterval(() => {
      let { top, list } = this.state;
      if (top === 250 - list.length * 50) {
        this.props.getList()
        this.setState({ top: 0 })
      } else {
        this.setState({ top: top - 1 })
      }
    }, 40)
    this.setState({ timer: t0 })
  }
  render() {
    return (
      <div className="card">
        <div className="card-title">
          <div>最新职位</div>
          <div className="more">更多</div>
        </div>
        <div className="card-container">
          <div className="card-items" style={{ top: `${this.state.top}px` }} id="cardItems" onMouseEnter={this.stopScroll.bind(this)} onMouseLeave={this.startScroll.bind(this)}>
            {
              this.state.list.map((item, index) => (
                <div key={index + '' + item.titeStamp} className="card-item">
                  <div className="item-name">{item.name}</div>
                  <div className="second">
                    <div className="item-place">{item.place}</div>
                    <div className="item-time">{this.setTime(item.timeStamp)}</div>
                  </div>
                </div>
              ))
            }
          </div>

        </div>
      </div>
    );
  }
}
export default Cards