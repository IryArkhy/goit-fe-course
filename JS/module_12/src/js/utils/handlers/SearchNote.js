import {ref, renderNoteList, notepad} from '../index';

const handleSearchInNotes = ({target}) => {
    notepad.filterNotesByQuery(target.value)
      .then(filteredItems => renderNoteList(ref.ul, filteredItems))
      .catch(error => {
        console.log(error);
        })
  }

ref.searchForm.addEventListener('input', handleSearchInNotes);