import './index.css'

const TransactionItem = props => {
  const {eachItem, func} = props
  const {id, title, amount, type} = eachItem

  const deleteItem = () => {
    func(id)
  }

  return (
    <div className="historyItemCard">
      <p className="itemText">{title}</p>
      <p className="itemText">Rs {amount}</p>
      <p className="itemText">{type}</p>
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
    </div>
  )
}

export default TransactionItem
