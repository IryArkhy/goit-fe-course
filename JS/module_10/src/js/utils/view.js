import {notepad} from './app';
import {createListItem} from './noteGenerator';
import {ref} from './refs';

export const renderNoteList = (listRef, notes) => {
    const renderList = notes.map(note => createListItem(note));
    listRef.innerHTML = '';
    listRef.append(...renderList);
  };
  
renderNoteList(ref.ul, notepad.notes);

export const addItemToList = (listRef, item) => {
    const listItem = createListItem(item);
    listRef.appendChild(listItem);
  };