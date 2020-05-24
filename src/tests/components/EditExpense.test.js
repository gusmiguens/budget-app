import React from 'react'
import { shallow } from 'enzyme'
import { EditExpense } from '../../components/EditExpense'
import expenses from '../fixtures/expenses'

let editExpense, removeExpense, history, wrapper
beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditExpense
            editExpense={editExpense}
            removeExpense={removeExpense}
            history={history}
            expense={expenses[1]}
        />
    )
})

describe('<EditExpense />', () => {
    it('Should render EditExpense', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it('Should handle editExpense', () => {
        wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
        expect(history.push).toHaveBeenLastCalledWith('/')
        expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
    })
    it('Should render removeExpense', () => {
        wrapper.find('button').simulate('click')
        expect(history.push).toHaveBeenLastCalledWith('/')
        expect(removeExpense).toHaveBeenLastCalledWith({
            id: expenses[1].id
        })
    })
})