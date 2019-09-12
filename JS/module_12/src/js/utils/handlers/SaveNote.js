import MicroModal from 'micromodal';
import { Notyf } from "notyf";
import {priorityTypes, NOTIFICATION_MESSAGES, ref, notepad, addItemToList} from '../index';
import "notyf/notyf.min.css";


MicroModal.init()
const shortid = require('shortid');
export const notyf = new Notyf();

const openModal = () => {
  MicroModal.show("note-editor-modal");
};


const handleSaveNewNote = event => {
  event.preventDefault();
  const [input, textarea] = event.currentTarget.elements;
  
  if (input.value === '' || textarea.value === '') {
    notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);
    return event.currentTarget.reset();
  }
  
  const newItem = {
    id: shortid.generate(),
    title: input.value,
    body: textarea.value,
    priority: priorityTypes.LOW,
  };

  notepad.saveNote(newItem)
    .then(newItem => addItemToList(ref.ul, newItem))
    .catch(error => {
      console.log(error);
    });

    event.currentTarget.reset();
    notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
    MicroModal.close('note-editor-modal')
  }


  ref.micromodal.addEventListener('submit', openModal);
  ref.micromodal.addEventListener("submit", handleSaveNewNote);

