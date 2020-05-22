const { createStore, combineReducers } = require('redux')
const expensesReducer = require('../reducers/expenses')
const filtersReducer = require('../reducers/filters')


const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

module.exports = store



