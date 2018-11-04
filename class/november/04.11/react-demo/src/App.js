import React, { Component } from 'react';
import './App.css';


const FETCHURL = "https://jsonplaceholder.typicode.com/users";


class App extends Component {
    state= {
        jsonData: null,
        showSpinner: true  //loaderistvis
    }

    componentDidMount(){
        fetch(FETCHURL)
        .then(res => res.json())
        .then(users => this.setState({jsonData: users, showSpinner: false}))
        .catch(err => console.log(err))
    }

    render() {
        let persons = [
            {
                name: "Otiko",
                age: 22,
                id: 1,
                isActive: false,
            },
            {
                name: "Grigoli",
                age: 20,
                id: 2,
                isActive: true,
            },
            {
                name: "Mamuka",
                age: 20,
                id: 14,
                isActive: true,
            },
            {
                name: "Salome",
                age: 28,
                id: 10,
                isActive: false,
            },
        ]

        const showList = false;
        // if (!showList) {
        //     return null;
        // }


        return (
            <div className="App">
                <h2>Using Array.prototype.map()</h2>
                {
                    showList ? (
                        <ul>
                            {persons.map(person => <li key={person.id}> {person.name} {person.age} </li>)}
                        </ul>
                    ): null
                }

                <h2>Using Array.prototype.filter()</h2>
                <ul>
                    {persons
                        .filter(person => person.isActive)
                        .map(person => <li key={person.id}> {person.name} {person.age} </li>)
                    }

                </ul>

                <h2>FETCHUrl  Data</h2>
                {
                    this.state.showSpinner ? <h3>Loading...</h3> : 
                    <ol>  {this.state.jsonData&&this.state.jsonData.map( user => <li key={user.id}>{user.name}</li>)}
                
                                 
                </ol>
                }

            </div>
        )


    }
}

export default App;
