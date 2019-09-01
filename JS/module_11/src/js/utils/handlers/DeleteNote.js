
import {noteActions, NOTIFICATION_MESSAGES} from '../constants/constants';
import {ref} from '../references/refs';
import {notepad} from '../app';
import {notyf} from './SaveNote'


const removeListItem = element => {
    const parentListItem = element.closest('.note-list__item');
    const id = parentListItem.dataset.id;
    notepad.deleteNote(id);
    parentListItem.remove();
  }
  
  const handleDeleteNote = ({target}) => {
    if (target.nodeName !== 'I') return;
    const iParent = target.closest('button');
    const action = iParent.dataset.action;
    if (action === noteActions.DELETE) removeListItem(target);
    notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
  }
  
  ref.ul.addEventListener('click', handleDeleteNote);