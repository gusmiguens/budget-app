const React = require('react')
const { shallow } = require('enzyme')
const { AddExpense } = require('../../components/AddExpense')
const expenses = require('../fixtures/expenses')

let addExpense, history, wrapper
beforeEach(() => {
    addExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpense addExpense={addExpense} history={history} />)
})

describe('<AddExpense />', () => {
    it('Should render AddExpense correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it('Should handle addExpense ', () => {
        wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
        expect(history.push).toHaveBeenLastCalledWith('/')
        expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
    })
})