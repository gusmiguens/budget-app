import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

describe('Expenses reducer tests', () => {
    it('Should set default state', () => {
        const state = expensesReducer(undefined, { type: '@@INIT' })
        expect(state).toEqual([])
    })
    describe('Remove expenses tests', () => {
        it('Should remove expense by id', () => {
            const action = {
                type: 'REMOVE_EXPENSE',
                id: expenses[1].id
            }
            const state = expensesReducer(expenses, action)
            expect(state).toEqual([
                expenses[0],
                expenses[2]
            ])
        })
        it('Should not remove if id not found', () => {
            const action = {
                type: 'REMOVE_EXPENSE',
                id: '32'
            }
            const state = expensesReducer(expenses, action)
            expect(state).toEqual([
                expenses[0],
                expenses[1],
                expenses[2]
            ])
        })
    })
    describe('Edit expenses tests', () => {
        it('Should edit expense by id', () => {
            const description = 'Rent updated'
            const action = {
                type: 'EDIT_EXPENSE',
                id: expenses[1].id,
                updates: {
                    description
                }
            }
            const state = expensesReducer(expenses, action)
            expect(state[1].description).toBe(description)
        })
        it('Should not edit expense if expense not found', () => {
            const amount = '9874621'
            const action = {
                type: 'EDIT_EXPENSE',
                id: '32',
                updates: {
                    amount
                }
            }
            const state = expensesReducer(expenses, action)
            expect(state).toEqual(expenses)
        })
    })
    describe('Add expenses tests', () => {
        it('Should add a expense', () => {
            const expense = {
                id: '123',
                description: 'Expenses test',
                note: 'No note',
                amount: 123456,
                createdAt: 123456
            }
            const action = {
                type: 'ADD_EXPENSE',
                expense
            }
            const state = expensesReducer(expenses, action)
            expect(state).toEqual([...expenses, expense])
        })
    })
})