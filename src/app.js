const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const AppRouter = require('./routers/AppRouter')
const store = require('./store/configureStore')
const { addExpense } = require('./actions/expenses')
const getVisibleExpenses = require('./selectors/expenses')
require('normalize.css/normalize.css')
require('../src/styles/styles.scss')
require('react-dates/lib/css/_datepicker.css')

store.dispatch(addExpense({ description: 'Water bill', amount: 900, createdAt: 2222 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 800, createdAt: 3333 }))
store.dispatch(addExpense({ description: 'Rent', amount: 1000, createdAt: 1111 }))

const state = store.getState()
const visibileExpenses = getVisibleExpenses(state.expenses, state.filters)

console.log(visibileExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))