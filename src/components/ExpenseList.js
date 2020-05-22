const React = require('react')
const { connect } = require('react-redux')
const ExpenseListItem = require('./ExpenseListItem')
const selectExpenses = require('../selectors/expenses')

const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />
                    })
                )
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList)

module.exports = {
    ConnectedExpenseList,
    ExpenseList
}