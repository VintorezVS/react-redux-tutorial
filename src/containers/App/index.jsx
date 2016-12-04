import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../Header';
import * as UserActions from '../../actions/UserActions';
import { checkIsAuthenticatedVK } from '../../utils';

class App extends Component {
    constructor(props) {
        super(props);
        checkIsAuthenticatedVK(props.userActions.handleLogin);
    }
    
    render() {
        const { name, isAuthenticated } = this.props.user;
        const handleLogout = this.props.userActions.handleLogout;
        return (
            <div className="row">
                <Header userName={name} isUserAuthenticated={isAuthenticated} handleLogout={handleLogout} />
                {this.props.children}
            </div>
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
        userActions: bindActionCreators(UserActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);