import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseList } from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'

describe('<ExpenseList />', () => {
    it('Should render ExpenseList with expenses', () => {
        const wrapper = shallow(<ExpenseList expenses={expenses}/>)
        expect(wrapper).toMatchSnapshot()
    })
    it('Should render Expense list with empty message', () => {
        const wrapper = shallow(<ExpenseList expenses={[]} />)
        expect(wrapper).toMatchSnapshot()
    })
})