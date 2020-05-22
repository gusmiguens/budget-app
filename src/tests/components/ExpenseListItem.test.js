const React = require('react')
const { shallow } = require('enzyme')
const ExpenseListItem = require('../../components/ExpenseListItem')
const expenses = require('../fixtures/expenses')

describe('<ExpenseListItem />', () => {
    it('Should render ExpenseListItem correctly', () => {
        const wrapper = shallow(<ExpenseListItem {...expenses[1]} />)
        expect(wrapper).toMatchSnapshot()
    })

})