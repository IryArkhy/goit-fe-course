import {ref} from '../references/refs';
import {renderNoteList} from '../rendering/view';
import {notepad} from '../app';

const handleSearchInNotes = ({target}) => {
    notepad.filterNotesByQuery(target.value)
      .then(filteredItems => renderNoteList(ref.ul, filteredItems))
      .catch(error => {
        console.log(error);
        })
  }

ref.searchForm.addEventListener('input', handleSearchInNotes);