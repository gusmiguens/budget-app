import { login, logout } from '../../actions/auth'

describe('Auth actions tests', () => {
    it('Should generate login action object', () => {
        const action = login({ uid: '123abc' })
        expect(action).toEqual({
            type: 'LOGIN',
            uid: {
                uid: '123abc'
            }
        })
    })
    it('Should generate login action object', () => {
        const action = logout()
        expect(action).toEqual({
            type: 'LOGOUT'
        })
    })
})