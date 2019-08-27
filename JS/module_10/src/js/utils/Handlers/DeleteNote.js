import {noteActions} from '../constants/constants';
import {ref} from '../references/refs';
import {notepad} from '../app';


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
  
  }

  ref.ul.addEventListener('click', handleDeleteNote);