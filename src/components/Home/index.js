import {Component} from 'react'

import './index.css'

import Login from '../Login'

import Message from '../Message'

import Logout from '../Logout'

class Home extends Component {
  state = {status: true}

  changeTheStatus = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  logButton = () => {
    const {status} = this.state
    if (status) {
      return <Login onClick={this.changeTheStatus} />
    }
    return <Logout onClick={this.changeTheStatus} />
  }

  messageStatus = () => {
    const {status} = this.state
    if (status) {
      return <Message text="Please Login" />
    }
    return <Message text="Welcome User" />
  }

  render() {
    return (
      <div className="main-container">
        <div className="bg-container">
          {this.messageStatus()}
          {this.logButton()}
        </div>
      </div>
    )
  }
}
export default Home
