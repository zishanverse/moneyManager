import './index.css'

const TransactionItem = props => {
  const {eachItem, optionList, func} = props
  const {id, title, amount, type} = eachItem

  const deleteItem = () => {
    func(id)
  }

  const displayTextItem = optionList.filter(each => each.optionId === type)

  return (
    <li className="historyItemCard">
      <p className="itemText text">{title}</p>
      <p className="itemText">Rs {amount}</p>
      <p className="itemText">{displayTextItem[0].displayText}</p>
      <button
        type="button"
        data-testid="delete"
        className="btn"
        onClick={deleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
