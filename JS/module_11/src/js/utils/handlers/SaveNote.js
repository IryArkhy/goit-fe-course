import MicroModal from 'micromodal';
import {priorityTypes} from '../constants/constants';
import   "../rendering/view";
import { Notyf } from "notyf";
import {ref} from '../references/refs';
import {notepad} from '../app';
import {addItemToList} from '../rendering/view';
import {NOTIFICATION_MESSAGES } from "../constants/constants";
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
    
    const createdNote = notepad.saveNote(newItem);
    addItemToList(ref.ul, createdNote);
    event.currentTarget.reset();
    notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
    MicroModal.close('note-editor-modal')
  }


  ref.micromodal.addEventListener('submit', openModal);
  ref.micromodal.addEventListener("submit", handleSaveNewNote);
