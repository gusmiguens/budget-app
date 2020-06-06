import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const Login = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Budget App</h1>
            <p>It's time to take control of your budget</p>
            <button className="button" onClick={startLogin}>Login with Google</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(Login)