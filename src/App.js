import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
		super()
		this.state = {
			users: []
		}
	}


  componentDidMount(){
    let initialUsers = [];
    console.log("componentDidMount");
    fetch('https://swapi.co/api/people/')
		.then(response => response.json())
    .then(people => {
      initialUsers = people.results.map(p => p);
      this.setState({ users: initialUsers, });
      console.log(initialUsers);
    });
  }

  render() {
    console.log("render");
    //const { users } = this.state.users;
  //   return (
  //     <div>
  //     <h1>{'This will always render'}</h1>
  //     { this.state && this.state.users &&
  //         <div>{'This will just render after the return of the async call'}
  //         {this.state.users.map(i => <li>{i.name}</li>)}
  //         </div>
  //     }
  //     </div>
  // )
    return this.state.users ? (
      <div>
        <h1>Star Wars</h1>
        { this.state && this.state.users &&
          <div>
            {this.state.users.map(i => <li>{i.name}</li>)}
          </div>
      }
      </div>
    ) : <h1>Loading</h1>
  }
}

export default App;
