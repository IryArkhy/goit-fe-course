import './sass/main.scss';
import {ref} from './js/utils/refs';
import {handleSaveNewNote, handleDeleteNote, handleSearchInNotes} from './js/utils/handlers';


ref.formContainer.addEventListener('submit', handleSaveNewNote);
ref.ul.addEventListener('click', handleDeleteNote);
ref.searchForm.addEventListener('input', handleSearchInNotes);

