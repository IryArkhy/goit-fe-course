import Notepad from './Model/NotepadModel';
import Storage from "./localStorage/localStorage";

const loadNotes = Storage.load("notes");
export const notepad = new Notepad(loadNotes);

