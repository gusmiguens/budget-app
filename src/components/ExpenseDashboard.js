const React = require('react')
const { ExpenseList } = require('./ExpenseList')
const { ExpenseListFilters } = require('./ExpenseListFilters')

const ExpenseDashboard = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

module.exports = ExpenseDashboard