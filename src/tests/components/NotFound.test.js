const React = require('react')
const { shallow } = require('enzyme')
const NotFound = require('../../components/NotFound')

describe('<NotFound />', () => {
    it('Should render NotFound correctly', () => {
        const wrapper = shallow(<NotFound />)
        expect(wrapper).toMatchSnapshot()
    })

})