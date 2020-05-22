const React = require('react')
const { shallow } = require('enzyme')
const { SingleDatePicker } = require('react-dates')
const ExpenseForm = require('../../components/ExpenseForm')
const expenses = require('../fixtures/expenses')
const moment = require('moment')

describe('<ExpenseFrom />', () => {
    describe('Expense form render tests', () => {
        it('Should render Expense form correctly', () => {
            const wrapper = shallow(<ExpenseForm />)
            expect(wrapper).toMatchSnapshot()
        })
        it('Should render Expense form with expense data', () => {
            const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
            expect(wrapper).toMatchSnapshot()
        })
        it('Should render error for invalid form submission', () => {
            const wrapper = shallow(<ExpenseForm />)
            expect(wrapper).toMatchSnapshot()
            wrapper.find('form').simulate('submit', {
                preventDefault: () => { }
            })
            expect(wrapper.state('error').length).toBeGreaterThan(0)
            expect(wrapper).toMatchSnapshot()
        })
    })
    describe('User interaction tests', () => {
        describe('Set description tests', () => {
            it('Should set description on input change', () => {
                const value = 'New description'
                const wrapper = shallow(<ExpenseForm />)
                wrapper.find('input').at(0).simulate('change', {
                    target: { value }
                })
                expect(wrapper.state('description')).toBe(value)
            })
        })
        describe('Set note tests', () => {
            it('Should set note on textarea change', () => {
                const value = 'New note'
                const wrapper = shallow(<ExpenseForm />)
                wrapper.find('textarea').at(0).simulate('change', {
                    target: { value }
                })
                expect(wrapper.state('note')).toBe(value)
            })
        })
        describe('Set amount tests', () => {
            it('Should set amount if valid input', () => {
                const value = '23.50'
                const wrapper = shallow(<ExpenseForm />)
                wrapper.find('input').at(1).simulate('change', {
                    target: { value }
                })
                expect(wrapper.state('amount')).toBe(value)
            })
            it('Should set amount if valid input', () => {
                const value = '23.555'
                const wrapper = shallow(<ExpenseForm />)
                wrapper.find('input').at(1).simulate('change', {
                    target: { value }
                })
                expect(wrapper.state('amount')).toBe('')
            })
        })
        describe('Form submission tests', () => {
            it('Should call onSubmit prop for valid form submission', () => {
                const onSubmitSpy = jest.fn()
                const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy} />)
                wrapper.find('form').simulate('submit', {
                    preventDefault: () => { }
                })
                expect(wrapper.state('error')).toBe('')
                expect(onSubmitSpy).toHaveBeenLastCalledWith({
                    description: expenses[1].description,
                    amount: expenses[1].amount,
                    note: expenses[1].note,
                    createdAt: expenses[1].createdAt
                })
            })
        })
        describe('Set date change tests', () => {
            it('Should set new date on date change', () => {
                const now = moment()
                const wrapper = shallow(<ExpenseForm />)
                wrapper.find(SingleDatePicker).prop('onDateChange')(now)
                expect(wrapper.state('createdAt')).toEqual(now)
            })
        })
        describe('Set calendar focus tests', () => {
            it('Should set calender focus on change', () => {
                const focused = true
                const wrapper = shallow(<ExpenseForm />)
                wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused })
                expect(wrapper.state('calendarFocused')).toBe(focused)
            })
        })
    })
})