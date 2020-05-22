const filtersReducer = require('../../reducers/filters')
const moment = require('moment')

describe('Filters reducer tests', () => {
    it('Should setup default filter values', () => {
        const state = filtersReducer(undefined, { type: '@@INIT' })
        expect(state).toEqual({
            text: '',
            sortBy: 'date',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        })
    })
    it('Should set sort by amount', () => {
        const action = {
            type: 'SORT_BY_AMOUNT',
            sortBy: 'amount'
        }
        const state = filtersReducer(undefined, action)
        expect(state.sortBy).toBe('amount')
    })
    it('Should set sort by date', () => {
        const defaultState = {
            text: '',
            startDate: undefined,
            endDate: undefined,
            sortBy: 'amount'
        }
        const action = { 
            type: 'SORT_BY_DATE',
            sortBy: 'date'
         }
        const state = filtersReducer(defaultState, action)
        expect(state.sortBy).toBe('date')
    })
    it('Should set text filter', () => {
        const text = 'rent'
        const action = {
            type: 'SET_TEXT_FILTER',
            text
        }
        const state = filtersReducer(undefined, action)
        expect(state.text).toBe(text)
    })
    it('Should set startDate filter', () => {
        const startDate = moment()
        const action = {
            type: 'SET_START_DATE',
            startDate
        }
        const state = filtersReducer(undefined, action)
        expect(state.startDate).toEqual(startDate)
    })
    it('Should set endDate filter', () => {
        const endDate = moment()
        const action = {
            type: 'SET_END_DATE',
            endDate
        }
        const state = filtersReducer(undefined, action)
        expect(state.endDate).toEqual(endDate)
    })
})