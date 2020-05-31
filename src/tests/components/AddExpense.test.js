import React from 'react'
import { shallow } from 'enzyme'
import { AddExpense } from '../../components/AddExpense'
import expenses from '../fixtures/expenses'

let startAddExpense, history, wrapper
beforeEach(() => {
    startAddExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpense startAddExpense={startAddExpense} history={history} />)
})

describe('<AddExpense />', () => {
    it('Should render AddExpense correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it('Should handle addExpense ', () => {
        wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
        expect(history.push).toHaveBeenLastCalledWith('/')
        expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1])
    })
})