
import {noteActions, NOTIFICATION_MESSAGES, Storage, ref, notepad} from '../index';
import {notyf} from './SaveNote';


const removeListItem = element => {
  const parentListItem = element.closest('.note-list__item');
  const id = parentListItem.dataset.id;
  notepad.deleteNote(id)
    .then(notes => Storage.save("notes", notes))
    .catch(error => {
      console.log(error);
      });
  parentListItem.remove();
}


const handleDeleteNote = ({target}) => {
  if (target.nodeName !== 'I') return;
  const iParent = target.closest('button');
  const action = iParent.dataset.action;
  if (action === noteActions.DELETE) {
    removeListItem(target);
    notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
}
}

ref.ul.addEventListener('click', handleDeleteNote);
