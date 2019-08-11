import {PRIORITY_TYPES} from './constants';
import {NOTE_ACTIONS} from './constants';
import {ref} from './refs';
import {renderNoteList} from './view';
import {notepad} from './app';
import {addItemToList} from './view';
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

  const removeListItem = element => {
    const parentListItem = element.closest('.note-list__item');
    const id = parentListItem.dataset.id;
    notepad.deleteNote(id);
    parentListItem.remove();
  }
  
  const handleDeleteNote = ({target}) => {
    if (target.nodeName !== 'I') return;
    const iParent = target.closest('button');
    const action = iParent.dataset.action;
  
    if (action === NOTE_ACTIONS.DELETE) removeListItem(target);
  
  }
  
  const handleSearchInNotes = (event) => {
    const filteredItems = notepad.filterNotesByQuery(event.target.value);
    renderNoteList(ref.ul, filteredItems);
  }

  export {
    handleSaveNewNote,
    removeListItem,
    handleDeleteNote,
    handleSearchInNotes,
  };