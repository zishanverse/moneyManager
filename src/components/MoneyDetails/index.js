import './index.css'

const MoneyDetails = props => {
  const {arr} = props

  const incomeList = arr.filter(each => each.type === 'INCOME')
  const expensesList = arr.filter(each => each.type === 'EXPENSES')
  const income = incomeList.reduce((total, next) => total + next.amount, 0)
  const expenses = expensesList.reduce((total, next) => total + next.amount, 0)

  const total = income - expenses

  return (
    <div className="moneyDetailsCard">
      <div className="balanceCard moneycard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="imgBalance"
        />
        <div className="balanceContent">
          <p className="yourStatus">Your Balance</p>
          <p className="rupees" data-testid="balanceAmount">
            Rs {total}
          </p>
        </div>
      </div>

      <div className="incomeCard moneycard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="imgBalance"
        />
        <div className="balanceContent">
          <p className="yourStatus">Your Income</p>
          <p className="rupees" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="expensesCard moneycard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="imgBalance"
        />
        <div className="balanceContent">
          <p className="yourStatus">Your Expenses</p>
          <p className="rupees" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
