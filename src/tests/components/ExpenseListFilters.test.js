import React from 'react'
import { shallow } from 'enzyme'
import { DateRangePicker } from 'react-dates'
import moment from 'moment'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper
beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
})

describe('<ExpenseListFilters />', () => {
    it('Should render ExpenseListFilters correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it('Should render ExpenseListFilters with alt date correctly', () => {
        wrapper.setProps({
            filters: altFilters
        })
        expect(wrapper).toMatchSnapshot()
    })
    describe('SetTextFilter tests', () => {
        it('Should handle text change', () => {
            const value = 'rent'
            wrapper.find('input').simulate('change', {
                target: { value }
            })
            expect(setTextFilter).toHaveBeenLastCalledWith(value)
        })
    })
    describe('Sort By tests', () => {
        it('Should sort by date', () => {
            const value = 'date'
            wrapper.setProps({
                filters: altFilters
            })
            wrapper.find('select').simulate('change', {
                target: { value }
            })
            expect(sortByDate).toHaveBeenCalled()
        })
        it('Should sort by amount', () => {
            const value = 'amount'
            wrapper.find('select').simulate('change', {
                target: { value }
            })
            expect(sortByAmount).toHaveBeenCalled()
        })
    })
    describe('On dates change', () => {
        it('Should handle date change', () => {
            const startDate = moment(0).add(4, 'years')
            const endDate = moment(0).add(8, 'years')
            wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate })
            expect(setStartDate).toHaveBeenLastCalledWith(startDate)
            expect(setEndDate).toHaveBeenLastCalledWith(endDate)
        })
    })
    describe('On focus date change', () => {
        it('Should hand date focus change', () => {
            const calendarFocused = 'endDate'
            wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused)
            expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
        })
    })
})