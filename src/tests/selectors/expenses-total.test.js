import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

describe('Expenses total tests', () => {
    it('Should return 0 if no expenses', () => {
        const total = getExpensesTotal([])
        expect(total).toBe(0)
    })
    it('Should add up a single expense', () => {
        const total = getExpensesTotal([expenses[1]])
        expect(total).toBe(2000)
    })
    it('Should add up multiple expenses', () => {
        const total = getExpensesTotal(expenses)
        expect(total).toBe(6000)
    })
})