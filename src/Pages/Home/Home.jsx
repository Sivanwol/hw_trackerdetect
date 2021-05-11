import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../../_actions';
import {history} from "../../_helpers";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }


    handleLogout(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        this.props.logout();

        history.push('/login');
    }

    render() {
        return (
            <div>
                <h1>Logged</h1>
                <a href="javascript:void(0)" onClick={this.handleLogout}>Logout</a>
            </div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedHome = connect(mapState, actionCreators)(Home);
export { connectedHome as Home };