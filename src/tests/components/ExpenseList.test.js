const React = require('react')
const { shallow } = require('enzyme')
const { ExpenseList } = require('../../components/ExpenseList')
const expenses = require('../fixtures/expenses')

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