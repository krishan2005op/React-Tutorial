import PropTypes from 'prop-types'

function UserGreeting(props){

    // if(props.isLoggedIn){
    //     return <h2> Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2> Please log in to continue</h2>
    // }
    // eslint-disable-next-line react/prop-types
    const weclomeMessage = <h2 className="welcome-message"> Welcome {props.username}</h2>

    const loginPrompt = <h2 className="login-prompt"> Please log in to continue</h2>

    // eslint-disable-next-line react/prop-types
    return (props.isLoggedIn ? weclomeMessage : loginPrompt)
}

UserGreeting.prototype = {
    isLoggedIn : PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting