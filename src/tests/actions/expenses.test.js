const {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense,
    startEditExpense
} = require('../../actions/expenses')
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'

const uid = 'myId'
const defaultAuthState = { auth: { uid }}
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})

describe('Edit expense tests', () => {
    it('Should setup remove expense action object', () => {
        const action = removeExpense({ id: '123abc' })
        expect(action).toEqual({
            type: 'REMOVE_EXPENSE',
            id: '123abc'
        })
    })
    it('should remove expense from firebase', (done) => {
        const store = createMockStore(defaultAuthState)
        const id = expenses[0].id
        store.dispatch(startRemoveExpense({ id }))
            .then(() => {
                const actions = store.getActions()
                expect(actions[0]).toEqual({
                    type: 'REMOVE_EXPENSE',
                    id
                })
                return database.ref(`users/${uid}/expenses/${id}`).once('value')
            }).then((snapshot) => {
                const val = snapshot.val()
                expect(val).toBeFalsy()
                done()
            })
    });
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
    it('Should edit expense from firebase', (done) => {
        const store = createMockStore(defaultAuthState)
        const id = expenses[0].id
        const updates = {
            description: 'updated description'
        }
        store.dispatch(startEditExpense(id, updates))
            .then(() => {
                const actions = store.getActions()
                expect(actions[0]).toEqual({
                    type: 'EDIT_EXPENSE',
                    id,
                    updates
                })
                return database.ref(`users/${uid}/expenses/${id}`).once('value')
            }).then((snapshot) => {
                expect(snapshot.val().description).toBe(updates.description)
                done()
            })
    });
})
describe('Add expense tests', () => {
    it('should setup add expense action object with provided values', () => {
        const action = addExpense(expenses[2])
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: expenses[2]
        })
    })
    it('should add expense to database and store', (done) => {
        const store = createMockStore(defaultAuthState)
        const expenseData = {
            description: 'Dummy data',
            amount: 200,
            note: 'this one is better',
            createdAt: 1999
        }
        store.dispatch(startAddExpense(expenseData))
            .then(() => {
                const actions = store.getActions()
                expect(actions[0]).toEqual({
                    type: 'ADD_EXPENSE',
                    expense: {
                        id: expect.any(String),
                        ...expenseData
                    }
                })
                return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
            }).then((snapshot) => {
                const val = snapshot.val()
                expect(val).toEqual(expenseData)
                done()
            })
    })
    it('should add expense with defaults to database and store', (done) => {
        const store = createMockStore(defaultAuthState)
        const expenseData = {
            description: '',
            note: '',
            amount: '',
            createdAt: 0
        }
        store.dispatch(startAddExpense({}))
            .then(() => {
                const actions = store.getActions()
                expect(actions[0]).toEqual({
                    type: 'ADD_EXPENSE',
                    expense: {
                        id: expect.any(String),
                        ...expenseData
                    }
                })
                return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
            }).then((snapshot) => {
                const val = snapshot.val()
                expect(val).toEqual(expenseData)
                done()
            })
    })
})

describe('Set expense tests', () => {
    it('should setup set expense action object with data', () => {
        const action = setExpenses(expenses)
        expect(action).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
    })
    it('should fetch the expenses from firebase', (done) => {
        const store = createMockStore(defaultAuthState)
        store.dispatch(startSetExpenses())
            .then(() => {
                const actions = store.getActions()
                expect(actions[0]).toEqual({
                    type: 'SET_EXPENSES',
                    expenses
                })
                done()
            })
    })
})