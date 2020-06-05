import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header'

describe('<Header />', () => {
    it('Should render Header correctly', () => {
        const wrapper = shallow(<Header startLogout={() => { }}/>)
        expect(wrapper).toMatchSnapshot()
    })
    it('Should call startLogout on button click', () => {
        const logoutSpy = jest.fn()
        const wrapper = shallow(<Header startLogout={logoutSpy} />)
        wrapper.find('button').simulate('click')
        expect(logoutSpy).toHaveBeenCalled()
    })
})