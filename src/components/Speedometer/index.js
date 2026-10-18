import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  applyAccelerate = () => {
    this.setState(prevState => {
      if (prevState.count < 200) {
        return {count: prevState.count + 10}
      }
      return null
    })
  }

  applyBrake = () => {
    this.setState(prevState => {
      if (prevState.count > 0) {
        return {count: prevState.count - 10}
      }
      return null
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image-container"
          alt="speedometer"
        />
        <h1 className="counter-value">
          Speed is <span>{count}mph</span>
        </h1>
        <p className="main-paragraph">Min limit is 0mph, Max limit is 200mph</p>
        <div>
          <button
            type="button"
            className="btn first-button"
            onClick={this.applyAccelerate}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="btn second-button"
            onClick={this.applyBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
