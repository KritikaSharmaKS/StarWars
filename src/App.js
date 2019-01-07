import React, { Component } from 'react';
import './App.css';
import NameCell from './NameCell';
import ReactTable from "react-table";
import 'react-table/react-table.css';

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
    const columns = [{
      Header: 'Name',
      accessor: 'name',
      Cell: (props) => <NameCell name={props.value} url={props.original.url} />
    },{
      Header: 'Gender',
      accessor: 'gender'
    }
    ,{
      Header: 'Height',
      accessor: 'height',
      Footer: (
        <span>{
          this.state.users.reduce((total, { height }) => total += Number(height), 0)
        }</span>
      )
    }
    ,{
      Header: 'Mass',
      accessor: 'mass'
    }
  ]
    return this.state.users ? (
      <div>
        <h1>Star Wars</h1>
        <div>
          <ReactTable 
            data = {this.state.users}
            columns = {columns}
            filterable
            defaultPageSize={5}
            className="-striped -highlight"
          />
        </div>
      </div>
    ) : <h1>Loading</h1>
  }
}

export default App;
