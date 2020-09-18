import React, { Component } from 'react'
import FoldersList from './FoldersList'
import NotesList from './NotesList'


import './App.css'
import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      folders: [],
      notes: [],

    }
  }
  
  componentDidMount() {
       
    this.reUpdateState();
  }  

  reUpdateState = () => {
   
    fetch("http://localhost:9090/notes")
    .then((response) => response.json())
    .then(data => {
      this.setState({notes:data});
    })


    fetch("http://localhost:9090/folders")
    .then((response) => response.json())
    .then(data => {
      this.setState({folders:data});
      
    })
    
  }  

  

  
  render() {
    return (
      
      <div className='App'>
      
        <ErrorBoundary>
        
        <FoldersList stater={this.state} reUpdateState={this.reUpdateState} />
        
        <NotesList stater={this.state} reUpdateState={this.reUpdateState} />
        
       
        <Counter />
        </ErrorBoundary>
        
      </div>
    )
  }
}
