import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddFolder from './AddFolder';



export default class Folders extends Component {
    
    reUpdateState = () => {
        this.props.reUpdateState()
    }

    deleteFolder = (id, e) => {
        e.preventDefault();
        fetch("http://localhost:9090/folders/" + id, {
            method: 'DELETE',
            headers: {
            'Content-type': 'application/json',
            },
           
            })
            .then(this.reUpdateState);
    }

    
    countNotesForFolder = (notes=[], folder) =>
  notes.filter(note => note.folderId == folder).length



    render() {

        const { notes=[], folders=[] } = this.props.staterr

        
        return (
            
            <div>
                <span className='App'>
                   
                <div>{
                    folders.map((obj) => {
                         return (
                            <div>
                                <p key={obj.id}>{obj.name}</p>
                                {this.countNotesForFolder(notes, obj.id)}
                                <button onClick={(e) => this.deleteFolder(obj.id, e)}>X</button>
                            </div>
                        )
                    })
                }</div>
                </span>
              
              <br />
              <br />

              <AddFolder reUpdateState={this.props.reUpdateState} />
            
            </div>

        )
    }
}


Folders.propTypes = {
    staterr: PropTypes.object.isRequired,
    reUpdateState: PropTypes.func.isRequired
    
  };