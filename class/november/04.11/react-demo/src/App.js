import React, { Component } from 'react';
import './App.css';

const FETCHURL = 'https://jsonplaceholder.typicode.com/photos';

class App extends Component {
  state = {
    jsonData: null,
    showSpinner: true
  }

  componentDidMount(){
    fetch(FETCHURL)
      .then(res => res.json())
      .then( users => {
        // setTimeout(() => {
          this.setState({jsonData : users, showSpinner : false})
        // }, 3000)
      })
      .catch(err => console.log(err))
  }

  render() {
    let persons = [
      {
        name: 'Oto',
        age: 22,
        id: 1,
        isActive: false,
      },
      {
        name: 'Grigoli',
        age: 20,
        id: 2,
        isActive: true,
      },
      {
        name: 'Mamuka',
        age: 20,
        id: 14,
        isActive: true,
      },
      {
        name: 'Salome',
        age: 17,
        id: 10,
        isActive: false,
      },
    ]
    const showList = true;

    // if( !showList ){
    //   return null;
    // }


    return (
      <div className="App">
      <h2>Using Array.prototype.map()</h2>
        {
          showList && (
            <ul>
              { persons.map( person => <li key={person.id}>{person.name} {person.age}</li>) }
            </ul>
          )
        }
        
        <h2>Using Array.prototype.filter()</h2>
        <ul>
          { persons
                  .filter( person => person.isActive)
                  .map( person => <li key={person.id}>{person.name} {person.age}</li>)
          }
        </ul>
        <h2>FETCHURL Data</h2>
        { 
          this.state.showSpinner ? <h3>Loading...</h3> : (
            <ol>
              { this.state.jsonData && this.state.jsonData.map( user => <li key={user.id}>{user.title}</li>) }
            </ol>
          )
        }
        
      </div>
    );
  }
}

export default App;
