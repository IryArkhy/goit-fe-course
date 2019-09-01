import {ref} from '../references/refs';
import {renderNoteList} from '../rendering/view';
import {notepad} from '../app';


export const handleSearchInNotes = ({target}) => {
    const filteredItems = notepad.filterNotesByQuery(target.value);
    renderNoteList(ref.ul, filteredItems);
  }

ref.searchForm.addEventListener('input', handleSearchInNotes);