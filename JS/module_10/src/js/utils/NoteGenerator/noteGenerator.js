import {noteActions} from '../constants/constants';
import {iconTypes} from '../constants/constants';
import {createTag} from './tagGenerator';

export const createListItem = (note) => {
    const noteCard = createTag({
      tag: 'li',
      classesName: 'note-list__item',
      id: note.id,
    });
  
  
    const noteWrapper = createTag({
      tag: 'div',
      classesName: 'note'
    });
  
    const createNoteContent = () => {
      const noteContent = createTag({
        tag: 'div',
        classesName: 'note__content'
      });
  
  
      const noteTitle = createTag({
        tag: 'h2',
        classesName: 'note__title',
        text: note.title,
      });
  
  
      const noteBody = createTag({
        tag: 'p',
        classesName: 'note__body',
        text: note.body
      });
      noteContent.append(noteTitle, noteBody);
      return noteContent;
    }
  
  
    const createNoteFooter = () => {
      const footer = createTag({
        tag: 'footer',
        classesName: 'note__footer'
      });
  
  
      const createNoteFooterSection1 = () => {
        const section = createTag({
          tag: 'section',
          classesName: 'note__section'
        });
  
        const buttonDecreasePriority = createTag({
          tag: 'button',
          classesName: 'action',
          dataSetAction: noteActions.DECREASE_PRIORITY,
        });
  
  
        const iconArrowDown = createTag({
          tag: 'i',
          classesName: 'material-icons action__icon',
          text: iconTypes.ARROW_DOWN,
        });
     
  
  
        const buttonIncreasePriority = createTag({
          tag: 'button',
          classesName: 'action',
          dataSetAction: noteActions.INCREASE_PRIORITY,
        });
  
        const iconArrowUp = createTag({
          tag: 'i',
          classesName: 'material-icons action__icon',
          text: iconTypes.ARROW_UP,
        });
      
  
  
        const priority = createTag({
          tag: 'span',
          classesName: 'note__priority',
          text: `Priority:  ${note.priority}`
        });
  
  
        buttonDecreasePriority.append(iconArrowDown);
        buttonIncreasePriority.append(iconArrowUp);
        section.append(buttonDecreasePriority, buttonIncreasePriority, priority)
  
        return section;
      }
  
      const createNoteFooterSection2 = () => {
        const section = createTag({
          tag: 'section',
          classesName: 'note__section'
        });
  
        const buttonEdit = createTag({
          tag: 'button',
          classesName: 'action',
          dataSetAction: noteActions.EDIT,
        });
  
  
        const iconEdit = createTag({
          tag: 'i',
          classesName: 'material-icons action__icon',
          text: iconTypes.EDIT,
        });
  
  
  
        const buttonDelete = createTag({
          tag: 'button',
          classesName: 'action',
          dataSetAction: noteActions.DELETE,
        });
  
  
        const iconDelete = createTag({
          tag: 'i',
          classesName: 'material-icons action__icon',
          text: iconTypes.DELETE,
        });
     
  
  
        buttonEdit.append(iconEdit);
        buttonDelete.append(iconDelete);
        section.append(buttonEdit, buttonDelete);
  
        return section;
      }
  
      const firstSection = createNoteFooterSection1();
      const secondSection = createNoteFooterSection2();
      footer.append(firstSection, secondSection);
  
      return footer;
  
    }
  
    const noteContent = createNoteContent();
    const footer = createNoteFooter();
  
    noteWrapper.append(noteContent, footer);
    noteCard.append(noteWrapper);
  
    return noteCard;
  }