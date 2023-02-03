// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationAmount, onDecrease} = props
  const {value, id} = denominationAmount

  const onDecreaseAmount = () => {
    onDecrease(id)
  }

  return (
    <li>
      <button className="button" type="button" onClick={onDecreaseAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
