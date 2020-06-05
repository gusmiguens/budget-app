import authReducer from '../../reducers/auth'

describe('Auth reducer tests', () => {
    it('Should set uid for login', () => {
        const action = {
            type: 'LOGIN',
            uid: '123456'
        }
        const state = authReducer({}, action)
        expect(state.uid).toBe(action.uid)
    })
    it('Should clear uid for logout', () => {
        const action = {
            type: 'LOGOUT'
        }
        const state = authReducer({ uid: '123456' }, action)
        expect(state).toEqual({})
    })
})