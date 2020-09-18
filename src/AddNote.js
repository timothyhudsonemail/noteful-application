import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css'


export default class AddNote extends Component {

    constructor(props){
        super(props);
        this.state={
            show: false
        }
    }


    reUpdateState = () => {
        this.props.reUpdateState()
    }
       


    addNewNote = (e) => {
        e.preventDefault();
        const newNote= document.getElementById('newNote').value;
        const newNoteContent= document.getElementById('newNoteContent').value;
        const folderId= document.getElementById('selecta').value;
        const data={"name": newNote, "folderId": folderId, "content": newNoteContent}
        
        if (newNote.length == 0) {
            alert("please enter a note name")
        }
        else if(newNoteContent.length == 0) {
            alert("please enter note content")
        }
        else if(folderId == "Choose a folder") {
            alert("please choose a folder")
        }
        else{


        fetch("http://localhost:9090/notes", {
            method: 'POST',
            headers: {
            'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(res => {
                if (!res.ok)
                  return res.json().then(e => Promise.reject(e))
                return res.json()
              })
            .then(this.reUpdateState)
            .then(this.setState({show: false}))
            .catch(error => {
                console.error({ error })
              })
            }
    } 


    newFunction1 = () => {
        const select = document.getElementById("selecta"); 
        const { folders=[] }=this.props.staterr;
        var options=folders;
        
        select.textContent='';
        for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt.name;
        el.value = opt.id;
        select.appendChild(el);
        
        }};


    addNott = () => {
        

        this.setState({show: true});

    }

    



render(){

    return(
        <div>
            <button style={{display: this.state.show ? 'none' : 'block' }}
                onClick={this.addNott}>Add a Note
            </button>
            
            <div className='Sub' style={{display: this.state.show ? 'block' : 'none' }}>
                    <p style={{color:"red"}}>add a note</p>
                    <input type='text' id='newNote' placeholder='note name'></input>
                    <br />
                    
                   
                
                    <br />
                    <input type='text' id='newNoteContent' placeholder='note content'></input>
                    <br />
                    <select id='selecta' onClick={this.newFunction1}>
                        <option>Choose a folder</option>
                    </select>
                   
                    <button onClick={(e) => {this.addNewNote(e)}}>add</button>
                    
                </div>
        </div>      
    )
}

} 

AddNote.propTypes = {
    staterr: PropTypes.object.isRequired,
    reUpdateState: PropTypes.func.isRequired
  };