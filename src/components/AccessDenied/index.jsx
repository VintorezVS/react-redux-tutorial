import React, { Component } from 'react';

export default class AccessDenied extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}
