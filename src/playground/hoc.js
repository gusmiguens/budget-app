//Higher order component - a component (hoc) that renders another component (regular)

const React = require('react')
const ReactDOM = require('react-dom')

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props} /> : <p>Please login to view the page</p>}
        </div>
    )
}

// const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuth(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info='These are the details' />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuth={false} info='These are the details' />, document.getElementById('app'))