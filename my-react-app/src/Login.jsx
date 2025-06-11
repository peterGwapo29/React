
function Login(props) {
    const success = <h2 className="success">Welcome {props.username}</h2>;
    const failed = <h2 className="fail">Try again.</h2>;

    return(
        props.isLoggedIn ? success : failed
    );
}

Login.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default Login