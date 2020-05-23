import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import Header from '../components/Header'
import ExpenseDashboard from '../components/ExpenseDashboard'
import AddExpense from '../components/AddExpense'
import EditExpense from '../components/EditExpense'
import HelpExpense from '../components/HelpExpense'
import NotFound from '../components/NotFound'

export const AppRouter = () => (
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

export default AppRouter