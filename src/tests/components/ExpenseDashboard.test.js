const React = require('react')
const { shallow } = require('enzyme')
const ExpenseDashboard = require('../../components/ExpenseDashboard')

describe('<ExpenseDashboard />', () => {
    it('Should render ExpenseDashboard correctly', () => {
        const wrapper = shallow(<ExpenseDashboard />)
        expect(wrapper).toMatchSnapshot()
    })

})