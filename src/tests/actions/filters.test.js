const {
    setEndDate,
    setStartDate,
    setTextFilter,
    sortByAmount,
    sortByDate
} = require('../../actions/filters')
const moment = require('moment')

describe('Start date tests', () => {
    it('Should generate set start date action object', () => {
        const action = setStartDate(moment(0))
        expect(action).toEqual({
            type: 'SET_START_DATE',
            startDate: moment(0)
        })
    })
})

describe('End date tests', () => {
    it('Should generate set end date action object', () => {
        const action = setEndDate(moment(0))
        expect(action).toEqual({
            type: 'SET_END_DATE',
            endDate: moment(0)
        })
    })
})

describe('Set text filters tests', () => {
    it('Should generate set text filters action object with provided text', () => {
        const text = 'rent'
        const action = setTextFilter(text)
        expect(action).toEqual({
            type: 'SET_TEXT_FILTER',
            text
        })
    })
    it('Should generate set text filters action object with default text', () => {
        const action = setTextFilter()
        expect(action).toEqual({
            type: 'SET_TEXT_FILTER',
            text: ''
        })
    })
})

describe('Sort by amount tests', () => {
    it('Should generate a sort by amount action object', () => {
        expect(sortByAmount()).toEqual({
            type: 'SORT_BY_AMOUNT',
            sortBy: 'amount'
        })
    })
})

describe('Sort by date tests', () => {
    it('Should generate a sort by date action object', () => {
        expect(sortByDate()).toEqual({
            type: 'SORT_BY_DATE',
            sortBy: 'date'
        })
    })
})