import React, { Component } from 'react';
import Details from "./components/UserDetails"
import Address from "./components/UserAdress"
import Company from "./components/UserCompany"
import "./styles/Users.css"

    const FETCHURL = "https://jsonplaceholder.typicode.com/users";

    class User extends Component {
        state = {
            users: null,
            loading: true
        }
        componentDidMount() {
            fetch(FETCHURL)
                .then(res => res.json())
                .then(users => this.setState({ users, loading: false }))
                .catch(err => console.log(err))
        }


        render() {
            const { users, loading } = this.state;
            if (loading) {
                return <div>Loading...</div>
            }
            return (
                <div>
                    {users && users.map(user => (
                        <div  className ="info" style={{border: "2px solid seagrin", padding: "10px", margin: "10px", width:"300px" }}>
                            <Details  details={user} />
                            <Address address={user.address}/>
                            <Company company={user.company}/>
                        </div>

                    ))

                    }

                </div>
               
                }
            



        export default User;
