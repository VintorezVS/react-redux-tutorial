import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleLogin } from '../../actions/UserActions';

class Login extends Component {
    render() {
        if (this.props.user.isAuthenticated) {
            return null;
        }
        
        return (
            <button onClick={this.props.handleLogin}>Login using VK</button>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleLogin: bindActionCreators(handleLogin, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
