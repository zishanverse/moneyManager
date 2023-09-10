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
  state = {title: '', amount: '', list: [], optionId: 'INCOME'}

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
      optionId: 'INCOME',
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
            <h1 className="name">Hi, Richard</h1>
            <p className="welcome">
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>

          <MoneyDetails arr={list} />

          <div className="flex">
            <div className="transactionAndHistory">
              <form>
                <div className="card">
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
                    AMOUNT
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
                    TYPE
                  </label>
                  <select
                    id="select"
                    className="input"
                    value={optionId}
                    onChange={this.changeType}
                  >
                    <option value={transactionTypeOptions[0].optionId} selected>
                      {transactionTypeOptions[0].displayText}
                    </option>
                    <option value={transactionTypeOptions[1].optionId}>
                      {transactionTypeOptions[1].displayText}
                    </option>
                  </select>

                  <button type="button" className="add" onClick={this.addItem}>
                    Add
                  </button>
                </div>
              </form>
            </div>

            <div className="transactionAndHistory">
              <h1 className="head">History</h1>
              <div className="historyItemCard">
                <p className="para text">Title</p>
                <p className="para">Amount</p>
                <p className="para">Type</p>
                <p className="hide">.</p>
              </div>
              <ul className="list">
                {list.map(each => (
                  <TransactionItem
                    key={each.id}
                    eachItem={each}
                    optionList={transactionTypeOptions}
                    func={this.deleteItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
