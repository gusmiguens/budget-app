import selectExpenses from '../../selectors/expenses'
import moment from 'moment'
import expenses from '../fixtures/expenses'

describe('Filter tests', () => {
    it('Should filter by text value', () => {
        const filters = {
            text: 'e',
            sortBy: 'date',
            startDate: undefined,
            endDate: undefined
        }
        const result = selectExpenses(expenses, filters)
        expect(result).toEqual([
            expenses[2],
            expenses[1]
        ])
    })
    it('Should filter by start date', () => {
        const filters = {
            text: '',
            sortBy: 'date',
            startDate: moment(0),
            endDate: undefined
        }
        const result = selectExpenses(expenses, filters)
        expect(result).toEqual([
            expenses[2],
            expenses[0]
        ])
    })
    it('Should filter by end date', () => {
        const filters = {
            text: '',
            sortBy: 'date',
            startDate: undefined,
            endDate: moment(0)
        }
        const result = selectExpenses(expenses, filters)
        expect(result).toEqual([
            expenses[0],
            expenses[1]
        ])
    })
})

describe('Sort tests', () => {
    it('Should sort by date', () => {
        const filters = {
            text: '',
            sortBy: 'date',
            startDate: undefined,
            endDate: undefined
        }
        const result = selectExpenses(expenses, filters)
        expect(result).toEqual([
            expenses[2],
            expenses[0],
            expenses[1]
        ])
    })
    it('Should sort by amount', () => {
        const filters = {
            text: '',
            sortBy: 'amount',
            startDate: undefined,
            endDate: undefined
        }
        const result = selectExpenses(expenses, filters)
        expect(result).toEqual([
            expenses[2],
            expenses[1],
            expenses[0]
        ])
    })
})