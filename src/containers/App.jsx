import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import * as pageActions from '../actions/PageActions';

class App extends Component {
    render() {
        const { user, page } = this.props;
        const { getPhotosByYear } = this.props.pageActions;
        return (
            <div className="row">
                <User name={user.name}/>
                <Page photos={page.photos} year={page.year} loading={page.fetching} getPhotosByYear={getPhotosByYear}/>
            </div>
        );
    }
}

export default connect(state => ({
    user: state.user,
    page: state.page
}), dispatch => ({
    pageActions: bindActionCreators(pageActions, dispatch)
}))(App);