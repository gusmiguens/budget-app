const React = require('react')
const { connect } = require('react-redux')
const ExpenseForm = require('./ExpenseForm')
const { addExpense } = require('../actions/expenses')

class AddExpense extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
})

const connectedAddExpense = connect(undefined, mapDispatchToProps)(AddExpense)

module.exports = {
    connectedAddExpense,
    AddExpense
}