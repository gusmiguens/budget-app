import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
    <header>
        <h1>Budget</h1>
        <NavLink to='/' activeClassName='is-active' exact={true}>Dashboard</NavLink>
        <NavLink to='/create' activeClassName='is-active'>Create Page</NavLink>
    </header>
)