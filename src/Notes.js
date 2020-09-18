import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddNote from './AddNote';

export default class Notes extends Component {
    

    reUpdateState = () => {
       this.props.reUpdateState()
    }
        
    

    addNewNote = (e) => {
        e.preventDefault();
        const newNote= document.getElementById('newNote').value;
        const folderId= document.getElementById('selecta').value;
        const data={"name": newNote, "folderId": folderId}
        
        fetch("http://localhost:9090/notes", {
            method: 'POST',
            headers: {
            'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(this.reUpdateState);
    }

    deleteNote = (id, e) => {

        e.preventDefault();
        
        fetch("http://localhost:9090/notes/" + id, {
            method: 'DELETE',
            headers: {
            'Content-type': 'application/json',
            },
           
            })
            .then(this.reUpdateState);

    }

  

    render() {

        const { notes=[] } =this.props.staterr

        return (
            <div>
                <span className='App'>
                <div>
                    <div>{
                        notes.map((obj) => {
                        return (
                        <div>
                        <p key={obj.id}>{obj.name}</p>
                        <button onClick={(e) => this.deleteNote(obj.id, e)}>X</button>
                        </div>)
                         })
                    }</div>

                    <br />
                    <br />

                    <AddNote staterr={this.props.staterr} reUpdateState={this.props.reUpdateState} />
                </div>    
                
              </span>
            </div>

        )
    }
}
Notes.propTypes = {
    staterr: PropTypes.object.isRequired,
    reUpdateState: PropTypes.func.isRequired
  };