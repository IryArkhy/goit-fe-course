import {notepad} from '../app'
import {ref} from '../references/refs';
import {renderNoteList} from '../rendering/view';


const handleSearchInNotes = ({target}) => {
    notepad.filterNotesByQuery(target.value)
      .then(filteredItems => renderNoteList(ref.ul, filteredItems))
      .catch(error => {
        console.log(error);
        })
  }

ref.searchForm.addEventListener('input', handleSearchInNotes);