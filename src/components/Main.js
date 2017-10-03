import React from 'react';

export default class extends React.Component {
    render(){
        return(
            <div>
                <div className="title">
                Reminder Pro
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder='i have to'/>
                    </div>
                    <button type='button' className='btn btn-success'>Add Reminder</button>
                </div>
            </div>
        );
    }
}