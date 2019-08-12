import {ref} from '../References/refs';
import {renderNoteList} from '../Rendering/view';
import {notepad} from '../app';


export const handleSearchInNotes = (event) => {
    const filteredItems = notepad.filterNotesByQuery(event.target.value);
    renderNoteList(ref.ul, filteredItems);
  }

ref.searchForm.addEventListener('input', handleSearchInNotes);