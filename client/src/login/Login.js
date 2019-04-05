import React from 'react'
import axios from 'axios'

class Login extends React.Component {
    state ={
        username: 'leeroy2',
        password: 'leeroyjr2'
    }

    render() {
        return(
            <>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username" />
                        <input
                            name="username"
                            id="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" />
                        <input
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            type="password"
                        />
                    </div>
                    <div>
                        <button type="sumbit">Login</button>
                    </div>
                </form>
            </>
        )
    }

    handleInputChange = event => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }
     
    handleSubmit = event => {
        event.preventDefault()

        const endpoint = 'http://localhost:5001/api/auth/login'

        axios.post(endpoint, this.state)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('jwt', res.data.token)

                this.props.history.push('/users')
            })  
            .catch(error => console.log(error))
    }
}

export default Login