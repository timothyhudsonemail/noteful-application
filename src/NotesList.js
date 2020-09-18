import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notes from './Notes';

export default class NotesList extends Component {
    
    render() {
        return (
            <div>
            <p style={{color:"blue"}} >Notes</p>
            <Notes staterr={this.props.stater} 
            reUpdateState={this.props.reUpdateState} />
            </div>
        )
    }
}

NotesList.propTypes = {
    staterr: PropTypes.object.isRequired,
    reUpdateState: PropTypes.func.isRequired
  };