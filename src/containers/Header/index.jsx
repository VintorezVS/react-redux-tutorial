import React, { PropTypes, Component } from 'react';
import NavLink from '../../components/NavLink';
import { PHOTO, AUDIO } from '../../constants/Routes';

export default class Header extends Component {
    static propTypes = {
        userName: PropTypes.string,
        isUserAuthenticated: PropTypes.bool.isRequired,
        handleLogout: PropTypes.func.isRequired
    };
    
    render() {
        return (
            <div>
                {this.props.isUserAuthenticated && (
                    <div>
                        <div>
                            <NavLink to={PHOTO}>Photo</NavLink>
                            <NavLink to={AUDIO}>Audio</NavLink>
                        </div>
                        <div>
                            <p> { this.props.userName}</p>
                            <button onClick={this.props.handleLogout}>Logout</button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
