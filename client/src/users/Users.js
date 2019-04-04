import React from 'react'
import axios from 'axios';

class Users extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        const headers = { authorization: localStorage.getItem('jwt') }
        const endpoint = 'http://localhost:5001/api/users'

        axios.get(endpoint, { headers }).then(res => {
            console.log(res)
            this.setState({ users: res.data })
        })
    }

    render() {
        return(
            <div>
                <h2>List of Users</h2>
        
                {this.state.users.map(user => {
                    return(
                        <p key={user.id}>NAME: {user.username}</p>
                    )
                })}
                
            </div>
        )
    }
}

export default Users