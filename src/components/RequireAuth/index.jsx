import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import AccessDenied from '../AccessDenied';
import { LOGIN } from "../../constants/Routes";

export default (Component) => {
    class AuthenticatedComponent extends React.Component {
        render() {
            return (
                <div>
                    {this.props.isUserAuthenticated ?
                        <Component {...this.props} />
                        :
                        <AccessDenied>
                            You are not login. You cannot see this page.
                            <Link to={LOGIN}>Go to Login</Link>
                        </AccessDenied>
                    }
                </div>
            );
        }
    }
    
    function mapStateToProps(state) {
        return {
            isUserAuthenticated: state.user.isAuthenticated
        };
    }
    
    return connect(mapStateToProps)(AuthenticatedComponent);
};
