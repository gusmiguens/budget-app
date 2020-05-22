const { v4: uuidv4 } = require('uuid')

const addExpense = (
    {
        description = '',
        note = '',
        amount = '',
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

module.exports = {
    addExpense,
    removeExpense,
    editExpense
}