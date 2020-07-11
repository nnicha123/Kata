import React, { Component } from 'react'
import axios from 'axios'
import './AllUsers.css'
class AllUsers extends Component {
    state = {
        users: [
            {id:1,name:'John'},{id:3,name:'Joe'}
        ]
    }
    componentDidMount = () => {
        axios.get('http://localhost:8000/information').then(res => {
            if(res.data){
                this.setState({ users: res.data })
            }
        })
    }
    render() {
        return (
            <div className="outerGrid">
                {this.state.users.map(el => {
                    return <div className="cardItem">
                        <h5>User {el.id}</h5>
                        <p>First Name : {el.first_name}</p>
                        <p>Last Name : {el.last_name}</p>
                        <p>Email : {el.email}</p>
                        <p>Date of birth : {el.date_of_birth}</p>
                    </div>
                // <div>{el.firstname}</div>
                })}

            </div>
        )
    }
}

export default AllUsers
