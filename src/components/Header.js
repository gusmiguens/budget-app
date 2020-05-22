const React = require('react')
const { NavLink } = require('react-router-dom')

const Header = () => (
    <header>
        <h1>Budget</h1>
        <NavLink to='/' activeClassName='is-active' exact={true}>Dashboard</NavLink>
        <NavLink to='/create' activeClassName='is-active'>Create Page</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Help Page</NavLink>
    </header>
)

module.exports = Header