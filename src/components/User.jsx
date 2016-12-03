import React, { PropTypes, Component } from 'react';

export default class User extends Component {
    constructor(props) {
        super(props);
        
        VK.Auth.getLoginStatus((resp) => {
            if (resp.status === 'connected') {
                props.handleLogin(resp.session.mid);
            }
        });
    }
    
    render() {
        const { name, error } = this.props;
        let template;
        
        if (name) {
            template = (
                <div className="logged">
                    <p>Привет, {name}!</p>
                    <a onClick={this.props.handleLogout}>Logout</a>
                </div>
            );
        } else {
            template = <button className='btn' onClick={this.props.handleLogin}>Войти</button>;
        }
        
        return (
            <div className='ib user'>
                {template}
                {error ? <p className='error'> {error}. <br /> Попробуйте еще раз.</p> : ''}
            </div>
        );
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    handleLogin: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired,
    error: PropTypes.string
};