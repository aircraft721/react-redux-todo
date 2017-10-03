import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addReminder, deleteReminder} from '../actions';
import moment from 'moment';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    addReminder(){
        console.log('this.state.dueDate',this.state.dueDate);
        this.props.addReminder(this.state.text, this.state.dueDate);
    }

    deleteReminder(id){
        this.props.deleteReminder(id);
    }

    renderReminders(){
        const {reminders} = this.props;
        return (
            <ul className="list-group col-sm-4 col-sm-offset-4">
                {reminders.map(reminder=> {
                    return(
                        <li key={reminder.id} className='list-group-item'>
                            <div className="list-item">
                                <div>{reminder.text}</div>
                                <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                            </div>
                            
                            <div
                                className="list-item delete-button"
                                onClick={()=>this.deleteReminder(reminder.id)}
                                >
                                &#x2715;
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
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
                            onChange={event=>this.setState({text:event.target.value})}
                        />
                        <input 
                            type="datetime-local"
                            className='form-control'
                            onChange={event => this.setState({dueDate:event.target.value})}
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
                {this.renderReminders()}
            </div>
        );
    }
}



function mapStateToProps(state){
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, {addReminder, deleteReminder})(Main);