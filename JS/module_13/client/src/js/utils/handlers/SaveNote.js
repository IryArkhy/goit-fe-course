import MicroModal from 'micromodal';
import { Notyf } from "notyf";
import {priorityTypes, NOTIFICATION_MESSAGES} from '../constants/constants'
import {ref} from '../references/refs';
import {notepad} from '../app'
import {addItemToList} from '../rendering/view';
import "notyf/notyf.min.css";


MicroModal.init();
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
    title: input.value,
    body: textarea.value,
    priority: priorityTypes.LOW,
  };

  notepad.saveNote(newItem)
    .then(newItem => addItemToList(ref.ul, newItem))
    .catch(error => {
      console.log("Error while saving note", error);
    });

    event.currentTarget.reset();
    notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
    MicroModal.close('note-editor-modal')
  }


  ref.micromodal.addEventListener('submit', openModal);
  ref.micromodal.addEventListener("submit", handleSaveNewNote);

