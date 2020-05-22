const React = require('react')
const { Link } = require('react-router-dom')

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>Amount: {amount} - CreatedAt: {createdAt}</p>
    </div>
)

module.exports = ExpenseListItem