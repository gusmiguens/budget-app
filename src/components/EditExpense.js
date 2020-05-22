const React = require('react')
const { connect } = require('react-redux')
const { editExpense, removeExpense } = require('../actions/expenses')
const ExpenseForm = require('./ExpenseForm')

class EditExpense extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/')
    }
    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button 
                onClick={this.onRemove}
                >Remove Expense
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
})

const connectedEditExpense = connect(mapStateToProps, mapDispatchToProps)(EditExpense)

module.exports = {
    connectedEditExpense,
    EditExpense
}