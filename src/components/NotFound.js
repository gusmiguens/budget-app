const React = require('react')
const { Link } = require('react-router-dom')

const NotFound = () => (
    <div>
        404! - <Link to='/' >Go Home</Link>
    </div>
)

module.exports = NotFound