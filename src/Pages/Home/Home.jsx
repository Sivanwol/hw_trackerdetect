import React from 'react';
import {connect} from 'react-redux';
import '../../../node_modules/primereact/resources/themes/vela-blue/theme.css';
import {userActions} from '../../_actions';
import {history} from "../../_helpers";
import {segmentsActions} from "../../_actions/segments.actions";
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }


    componentDidMount() {
        this.props.get_all_segments();
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({submitted: true});
        const {name, description} = this.state;
        if (name && description) {
            this.props.create_segments(name, description);
        }
    }

    handleLogout(e) {
        e.preventDefault();

        this.setState({submitted: true});
        this.props.logout();

        history.push('/login');
    }

    render() {
        const {name, description, submitted} = this.state;
        const {segments_items} = this.props;
        return (
            <div>
                <h1>Segments</h1>

                <div className="content-section implementation">
                    <div className="card">
                        <DataTable value={segments_items}>
                            <Column field="name" header="Name"></Column>
                            <Column field="description" header="Description"></Column>
                            <Column field="created" header="Created at"></Column>
                        </DataTable>
                    </div>
                </div>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !name ? ' has-error' : '')}>
                        <label htmlFor="name">name</label>
                        <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange}/>
                        {submitted && !name &&
                        <div className="help-block">name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !description ? ' has-error' : '')}>
                        <label htmlFor="description">description</label>
                        <input type="text" className="form-control" name="description" value={description} onChange={this.handleChange}/>
                        {submitted && !description &&
                        <div className="help-block">description is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Save</button>
                    </div>
                </form>
                <a onClick={this.handleLogout}>Logout</a>
            </div>
        );
    }
}

function mapState(state) {
    const {loggingIn} = state.authentication;
    const {segments_items} = state.segments;

    return {
        segments_items,
        loggingIn
    };
}

const actionCreators = {
    get_all_segments: segmentsActions.get_all_segments,
    create_segments: segmentsActions.create_segments,
    logout: userActions.logout
};

const connectedHome = connect(mapState, actionCreators)(Home);
export {connectedHome as Home};