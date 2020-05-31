import { v4 as uuidv4 } from 'uuid'
import database from '../firebase/firebase'

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = '',
            createdAt = 0
        } = expenseData
        const expense = {
            description,
            note,
            amount,
            createdAt
        }
        return database.ref('expenses').push(expense)
            .then((snapshot) => {
                dispatch(addExpense({
                    id: snapshot.key,
                    ...expense
                }))
            })
    }
}

/*
How it worked:
    - component calls action generator
    - action generator returns object
    - component dispatches object
    - redux store changes
*/

/*
How it works with firebase
    - component calls action generator
    - action generator returns function
    - component dispatches function (?)
    - function runs (has the ability to dispatch other actions and do whatever it wants
*/