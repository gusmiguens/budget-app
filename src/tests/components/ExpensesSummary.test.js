import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

describe('', () => {
    it('Should correctly render Expenses Summary with one expense', () => {
        const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={2356} />)
        expect(wrapper).toMatchSnapshot()
    })
    it('Should correctly render Expenses Summary with multiple expenses', () => {
        const wrapper = shallow(<ExpensesSummary expenseCount={13} expensesTotal={45625123} />)
        expect(wrapper).toMatchSnapshot()
    })
})
