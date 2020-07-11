import React, { Component } from 'react'
import axios from 'axios'
import './Birthday.css'

class Birthday extends Component {
    state = {
        month: '',
        day: '',
        find: false,
        birthdayPerson: [],
        noInfo:false
    }
    submitted = (e) => {
        e.preventDefault();
       
         axios.get('http://localhost:8000/information/' + this.state.month + this.state.day).then(res => {
            if (res.data) this.setState({ birthdayPerson: res.data, find: true,noInfo:false })
            else this.setState({noInfo:true,find:false})
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.submitted(e)}>
                    <div className="form-group">
                        <label>Month :</label>
                        <input type="text" value={this.state.month} onChange={e => this.setState({ month: e.target.value })} placeholder="e.g. 07"/>
                    </div>
                    <div className="form-group">
                        <label>Day :</label>
                        <input type="text" value={this.state.day} onChange={e => this.setState({ day: e.target.value })} placeholder="e.g. 18"/>
                    </div>
                    <button type="submit">Find Birthday Person</button>
                </form>
                {this.state.find && <div className="cardBirthday">
                    <h5>User {this.state.birthdayPerson.id}</h5>
                    <p>First Name : {this.state.birthdayPerson.first_name}</p>
                    <p>Last Name : {this.state.birthdayPerson.last_name}</p>
                    <p>Email : {this.state.birthdayPerson.email}</p>
                    <p>Date of birth : {this.state.birthdayPerson.date_of_birth}</p>
                </div>}
                {this.state.noInfo && <div className="cardBirthday">
                    No users are born today
                </div>}

            </div>
        )
    }
}

export default Birthday

