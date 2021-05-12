import './App.css';
import {
    Router ,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";
import {PrivateRoute} from "../_components";
import {history} from '../_helpers';
import {Login} from "../Pages/Login";
import {Home} from "../Pages/Home";
import {Component} from "react";
import {alertActions} from "../_actions";
import {connect} from "react-redux";

class App extends Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/home" component={Home}/>
                                <Route path="/login" component={Login}/>
                                <Redirect from="*" to="/home"/>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}


function mapState(state) {
    const {alert} = state;
    return {alert};
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export {connectedApp as App};
