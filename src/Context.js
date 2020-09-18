import React, { Component, createContext } from 'react';


export const NewContext = createContext();

class NewContextProvider extends Component {
  state=
  {  
  notes: [],
  folders: [],
  addFolder:'',
  deleteFolder: '',
  addNote: '',
  deleteNote: '',
  }
}
export default NewContextProvider;