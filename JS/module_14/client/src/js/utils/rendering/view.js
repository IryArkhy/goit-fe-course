import {notepad} from '../app';
import {createListItem} from '../noteGenerator/noteGenerator';
import {ref} from '../references/refs'; 



export const renderNoteList = (listRef, notes) => {
    const renderList = notes.map(note => createListItem(note));
    listRef.innerHTML ="";
    listRef.innerHTML= renderList.join("");
  };
  

notepad.getNotes().then(notes => renderNoteList(ref.ul, notes));



export const addItemToList = (listRef, item) => {
  const listItem = createListItem(item);
  listRef.insertAdjacentHTML('beforeend', listItem);
};


