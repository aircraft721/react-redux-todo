import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addReminder} from '../actions';


class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    addReminder(){
        this.props.addReminder(this.state.text);
    }

    render(){
        return(
            <div>
                <div className="title">
                Reminder Pro
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder='i have to'
                            onChange={(event)=>this.setState({text:event.target.value})}
                        />
                    </div>
                    <button 
                        type='button' 
                        className='btn btn-success'
                        onClick={()=>this.addReminder()}
                        >
                        Add Reminder
                    </button>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addReminder}, dispatch);
}

export default connect(null, mapDispatchToProps)(Main);