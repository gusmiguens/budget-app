import React from 'react'
import { shallow } from 'enzyme'
import { Login } from '../../components/Login'

describe('<Login />', () => {
    it('Should correctly render Login page', () => {
        const wrapper = shallow(<Login />)
        expect(wrapper).toMatchSnapshot()
    })
    it('Should call startLogin on button click ', () => {
        const loginSpy = jest.fn()
        const wrapper = shallow(<Login startLogin={loginSpy} />)
        wrapper.find('button').simulate('click')
        expect(loginSpy).toHaveBeenCalled()
    })
})