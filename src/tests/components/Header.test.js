const React = require('react')
const { shallow } = require('enzyme')
const Header = require('../../components/Header')

describe('<Header />', () => {
    it('Should render Header correctly', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper).toMatchSnapshot()
    })
})