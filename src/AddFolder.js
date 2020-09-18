import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css'

export default class AddFolder extends Component {

    constructor(props){
        super(props);
        this.state={
            show: false
        }
    }


    reUpdateState = () => {
        this.props.reUpdateState()
    }
       


    addNewFolder = (e) => {

        e.preventDefault();
        const newFolder= document.getElementById('newFolder').value;
        const data={"name": newFolder}

        if (newFolder == '') {
            alert("please give the folder a name")
        }
        else{
        fetch("http://localhost:9090/folders", {
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

    addFoldd = () => {
        

        this.setState({show: true});

    }



render(){

    return(
        <div>
            <button style={{display: this.state.show ? 'none' : 'block' }}
                onClick={this.addFoldd}>Add a Folder
            </button>
            
            <span className='Sub' id='addFold' style={{display: this.state.show ? 'block' : 'none' }}>
              <p style={{color:"red"}}>add a folder</p>
              <input type='text' id='newFolder'></input>
              <br />
              <button onClick={(e) => {this.addNewFolder(e)}}>add</button>
            </span>
        </div>      
    )
}

}

AddFolder.propTypes = {
    reUpdateState: PropTypes.func.isRequired
  };