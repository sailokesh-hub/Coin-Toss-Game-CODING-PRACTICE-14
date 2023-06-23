// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {coin: 1, total: 0, heads: 0, tails: 0}

  btnClicked = () => {
    const randNum = Math.floor(Math.random() * 10)
    this.setState(prevState => ({
      coin: randNum,
      total: prevState.total + 1,
    }))
    if (randNum < 5) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
  }

  render() {
    const {coin, total, heads, tails} = this.state
    let img
    if (coin < 5) {
      img = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      img = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }
    return (
      <div className="toss-bg-container">
        <div className="toss-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="title">Heads (or) Tails</p>
          <img src={img} alt="toss result" className="img" />
          <button className="toss-btn" onClick={this.btnClicked} type="button">
            Toss Coin
          </button>
          <div className="count-container">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
