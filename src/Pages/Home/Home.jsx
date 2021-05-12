import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../../_actions';
import {history} from "../../_helpers";
import {segmentsService} from "../../_services";
import {segmentsActions} from "../../_actions/segments.actions";
import {segments} from "../../_reducers/segments.reducer";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }


    componentDidMount() {
        this.props.get_all_segments();
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
                <a onClick={this.handleLogout}>Logout</a>
            </div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    const { segments_items } = state.segments;

    return {
        segments_items,
        loggingIn
    };
}

const actionCreators = {
    get_all_segments: segmentsActions.get_all_segments,
    logout: userActions.logout
};

const connectedHome = connect(mapState, actionCreators)(Home);
export { connectedHome as Home };