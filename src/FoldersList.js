import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Folders from './Folders';

export default class FoldersList extends Component {
    
    render() {
        return (
            <div>
            <p style={{color:"blue"}} >Folders</p>
            <Folders staterr={this.props.stater} 
            reUpdateState={this.props.reUpdateState} />
            </div>
        )
    }
}

FoldersList.propTypes = {
    stater: PropTypes.object.isRequired,
    reUpdateState: PropTypes.func.isRequired
  };