import React from 'react'
import { shallow } from 'enzyme'
import LoadingPage from '../../components/LoadingPage'

describe('<Loading Page /> test', () => {
    it('Should correctly render Loading page', () => {
        const wrapper = shallow(<LoadingPage />)
        expect(wrapper).toMatchSnapshot()
    })
})