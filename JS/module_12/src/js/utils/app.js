import {Notepad, Storage} from './index';

const loadNotes = Storage.load("notes");
export const notepad = new Notepad(loadNotes);

