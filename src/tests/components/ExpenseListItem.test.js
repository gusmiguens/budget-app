import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

describe('<ExpenseListItem />', () => {
    it('Should render ExpenseListItem correctly', () => {
        const wrapper = shallow(<ExpenseListItem {...expenses[1]} />)
        expect(wrapper).toMatchSnapshot()
    })

})