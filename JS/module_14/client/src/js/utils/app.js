import Notepad from './Model/NotepadModel';
import {getNotes} from './services/api';
import {priorityTypes} from './constants/constants';

const loadNotes = getNotes();
export const notepad = new Notepad(loadNotes);


//Test for uppdating priority

// notepad.updateNotePriority(2, {"priority" : priorityTypes.LOW})


