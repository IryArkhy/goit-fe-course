import {NOTE_ACTIONS} from './constants';
import {ICON_TYPES} from './constants';
import {createTag} from './tagGenerator';

export const createListItem = (note) => {
    const noteCard = createTag({
      tag: 'li',
      className: 'note-list__item',
      id: note.id,
    });
  
  
    const noteWrapper = createTag({
      tag: 'div',
      className: 'note'
    });
  
    const createNoteContent = () => {
      const noteContent = createTag({
        tag: 'div',
        className: 'note__content'
      });
  
  
      const noteTitle = createTag({
        tag: 'h2',
        className: 'note__title',
        text: note.title,
      });
  
  
      const noteBody = createTag({
        tag: 'p',
        className: 'note__body',
        text: note.body
      });
  
      noteContent.append(noteTitle, noteBody);
      return noteContent;
    }
  
  
    const createNoteFooter = () => {
      const footer = createTag({
        tag: 'footer',
        className: 'note__footer'
      });
  
  
      const createNoteFooterSection1 = () => {
        const section = createTag({
          tag: 'section',
          className: 'note__section'
        });
  
        const buttonDecreasePriority = createTag({
          tag: 'button',
          className: 'action',
          dataSetAction: NOTE_ACTIONS.DECREASE_PRIORITY,
        });
  
  
        const iconArrowDown = createTag({
          tag: 'i',
          className: 'material-icons',
          text: ICON_TYPES.ARROW_DOWN,
        });
        iconArrowDown.classList.add('action__icon');
  
  
        const buttonIncreasePriority = createTag({
          tag: 'button',
          className: 'action',
          dataSetAction: NOTE_ACTIONS.INCREASE_PRIORITY,
        });
  
        const iconArrowUp = createTag({
          tag: 'i',
          className: 'material-icons',
          text: ICON_TYPES.ARROW_UP,
        });
        iconArrowUp.classList.add('action__icon');
  
  
        const priority = createTag({
          tag: 'span',
          className: 'note__priority',
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
          className: 'note__section'
        });
  
        const buttonEdit = createTag({
          tag: 'button',
          className: 'action',
          dataSetAction: NOTE_ACTIONS.EDIT,
        });
  
  
        const iconEdit = createTag({
          tag: 'i',
          className: 'material-icons',
          text: ICON_TYPES.EDIT,
        });
        iconEdit.classList.add('action__icon');
  
  
        const buttonDelete = createTag({
          tag: 'button',
          className: 'action',
          dataSetAction: NOTE_ACTIONS.DELETE,
        });
  
  
        const iconDelete = createTag({
          tag: 'i',
          className: 'material-icons',
          text: ICON_TYPES.DELETE,
        });
        iconDelete.classList.add('action__icon');
  
  
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