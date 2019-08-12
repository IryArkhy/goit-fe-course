import {PRIORITY_TYPES} from '../Constants/constants';
import {ref} from '../References/refs';
import {notepad} from '../app';
import {addItemToList} from '../Rendering/view';
const shortid = require('shortid');

const handleSaveNewNote = event => {
    event.preventDefault();
    const [input, textarea] = event.currentTarget.elements;
  
    if (input.value === '' || textarea.value === '') {
      alert('Необходимо заполнить все поля!');
      return event.currentTarget.reset();
    }
  
    const newItem = {
      id: shortid.generate(),
      title: input.value,
      body: textarea.value,
      priority: PRIORITY_TYPES.LOW,
    };
    
    const createdNote = notepad.saveNote(newItem);
    addItemToList(ref.ul, createdNote);
    event.currentTarget.reset();
  }

  ref.formContainer.addEventListener('submit', handleSaveNewNote);