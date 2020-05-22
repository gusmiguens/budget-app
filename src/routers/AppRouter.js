const { BrowserRouter, Route, Switch } = require('react-router-dom')
const React = require('react')
const Header = require('../components/Header')
const ExpenseDashboard = require('../components/ExpenseDashboard')
const AddExpense = require('../components/AddExpense')
const EditExpense = require('../components/EditExpense')
const HelpExpense = require('../components/HelpExpense')
const NotFound = require('../components/NotFound')

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={ExpenseDashboard} exact={true} />
                <Route path='/create' component={AddExpense} />
                <Route path='/edit/:id' component={EditExpense} />
                <Route path='/help' component={HelpExpense} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

module.exports = AppRouter

