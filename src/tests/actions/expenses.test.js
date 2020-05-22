const { addExpense, editExpense, removeExpense } = require('../../actions/expenses')

describe('Edit expense tests', () => {
    it('Should setup remove expense action object', () => {
        const action = removeExpense({ id: '123abc' })
        expect(action).toEqual({
            type: 'REMOVE_EXPENSE',
            id: '123abc'
        })
    })
})

describe('Edit expense tests', () => {
    it('Should setup edit expense action object', () => {
        const action = editExpense('123abc', { note: 'New description' })
        expect(action).toEqual({
            type: 'EDIT_EXPENSE',
            id: '123abc',
            updates: { note: 'New description' }
        })
    })
})
describe('Add expense tests', () => {
    it('should setup add expense action object with provided values', () => {
        const expenseData = {
            description: 'Rent',
            amount: '999',
            createdAt: 1000,
            note: 'This was last month rent'
        }
        const action = addExpense(expenseData)
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...expenseData,
                id: expect.any(String)
            }
        })
    })
    it('should setup add expense action object with default values', () => {
        const action = addExpense()
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                description: '',
                note: '',
                amount: '',
                createdAt: 0,
                id: expect.any(String)
            }
        })
    })
})