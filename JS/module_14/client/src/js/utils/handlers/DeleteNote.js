import {
  noteActions,
  NOTIFICATION_MESSAGES
} from '../constants/constants'
import {
  notepad
} from '../app'
import {
  ref
} from '../references/refs';
import {
  notyf
} from './SaveNote';
import {
  async
} from 'q';


const removeListItem = async element => {
  const parentListItem = element.closest('.note-list__item');
  const id = parentListItem.dataset.id;
  try {
    await notepad.deleteNote(id);
    parentListItem.remove();

  } catch (error) {
    console.log("Error while deleting note ", error);
    notyf.error(NOTIFICATION_MESSAGES.ERROR);
  };
}


const handleDeleteNote = ({
  target
}) => {
  if (target.nodeName !== 'I') return;
  const iParent = target.closest('button');
  const action = iParent.dataset.action;
  if (action === noteActions.DELETE) {
    removeListItem(target);
    console.log(target)
    notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
  }
}



ref.ul.addEventListener('click', handleDeleteNote);