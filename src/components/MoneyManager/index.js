import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {title: '', amount: '', list: [], optionId: 'Income'}

  changeType = event => {
    this.setState({optionId: event.target.value})
  }

  changeTitle = event => {
    this.setState({title: event.target.value})
  }

  changeAmount = event => {
    this.setState({amount: event.target.value})
  }

  addItem = event => {
    event.preventDefault()
    const {title, amount, optionId} = this.state

    const item = {
      id: uuidv4(),
      title,
      amount: parseInt(amount),
      type: optionId,
    }

    this.setState(pre => ({
      list: [...pre.list, item],
      title: '',
      amount: '',
      optionId: 'Income',
    }))
  }

  deleteItem = id => {
    const {list} = this.state
    const filtered = list.filter(each => each.id !== id)

    this.setState({list: filtered})
  }

  render() {
    const {list, optionId, title, amount} = this.state

    return (
      <div className="container">
        <div>
          <div className="introCard">
            <h1 className="name">HI, Richard</h1>
            <p className="welcome">
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>

          <MoneyDetails arr={list} />

          <div className="transactionAndHistory">
            <div className="card">
              <form>
                <h1 className="head">Add Transaction</h1>
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <input
                  type="text"
                  className="input"
                  id="title"
                  value={title}
                  onChange={this.changeTitle}
                  placeholder="TITLE"
                />
                <label htmlFor="account" className="label">
                  TITLE
                </label>
                <input
                  type="text"
                  className="input"
                  id="account"
                  value={amount}
                  onChange={this.changeAmount}
                  placeholder="AMOUNT"
                />

                <label htmlFor="select" className="label">
                  TITLE
                </label>
                <select
                  id="select"
                  className="input"
                  value={optionId}
                  onChange={this.changeType}
                >
                  <option
                    value={transactionTypeOptions[0].displayText}
                    selected
                  >
                    {transactionTypeOptions[0].displayText}
                  </option>
                  <option value={transactionTypeOptions[1].displayText}>
                    {transactionTypeOptions[1].displayText}
                  </option>
                </select>

                <button type="button" className="add" onClick={this.addItem}>
                  Add
                </button>
              </form>
            </div>
          </div>

          <div className="card">
            <h1 className="head">History</h1>
            <div className="historyItemCard">
              <p className="para">Title</p>
              <p className="para">Amount</p>
              <p className="para">Type</p>
            </div>
            <ul className="list">
              {list.map(each => (
                <TransactionItem
                  key={each.id}
                  eachItem={each}
                  func={this.deleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
