import {priorityTypes} from '../constants/constants';
import {ref} from '../references/refs';
import {notepad} from '../app';
import {addItemToList} from '../rendering/view';
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
      priority: priorityTypes.LOW,
    };
    
    const createdNote = notepad.saveNote(newItem);
    addItemToList(ref.ul, createdNote);
    event.currentTarget.reset();
  }

  ref.formContainer.addEventListener('submit', handleSaveNewNote);