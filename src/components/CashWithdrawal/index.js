// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onDecrease = id => {
    const {denominationsList} = this.props
    const decreaseAmount = denominationsList.filter(each => each.id === id)
    console.log(decreaseAmount.value)

    this.setState(prevState => ({
      amount: prevState.amount - decreaseAmount,
    }))
  }

  render() {
    const {amount} = this.state

    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="user-details">
            <h1 className="logo"> S </h1>
            <p className="name"> Sarah Williams </p>
          </div>
          <div className="amount-container">
            <p className="suggestion"> Your Balance </p>
            <div>
              <p className="amount"> {amount} </p>
              <p className="in-amount"> In Rupees </p>
            </div>
          </div>
          <p className="withdraw"> Withdraw </p>
          <p className="user-decesion"> CHOOSE SUM (IN RUPEES) </p>
          <ul>
            {denominationsList.map(each => (
              <DenominationItem
                denominationAmount={each}
                key={each.id}
                onDecrease={this.onDecrease}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
