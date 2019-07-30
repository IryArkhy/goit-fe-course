'use strict';

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

const initialNotes = [{
    id: 'id-1',
    title: 'JavaScript essentials',
    body: 'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body: 'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body: 'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];

class Notepad {

  constructor(notes = []) {
    this._notes = notes;
  }
  static Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
  };

  get notes() {
    return this._notes;
  }

  findNoteById(id) { //Works
    for (let note of this._notes) {
      if (note.id === id) return note;
    }


  };
  saveNote(note) { //Works
    this._notes.push(note);
  };

  deleteNote(id) { //Works
    for (let i = 0; i < this._notes.length; i += 1) {
      const note = this._notes[i];
      if (note.id === id) {
        this._notes.splice(i, 1);
        return;
      }

    }

  };
  updateNoteContent(id, updatedContent) { //Works

    let newNote = {};
    let indexOfNewNote;
    for (let note of this._notes) {
      if (note.id === id) {
        indexOfNewNote = this._notes.indexOf(note);
        newNote = {
          ...note,
          ...updatedContent
        };
        this._notes[indexOfNewNote] = newNote;
      }
    }
    return newNote;


  };
  updateNotePriority(id, priority) { //Works
    let newNote = {};
    for (let note of this._notes) {
      if (note.id === id) {
        note.priority = priority;
        newNote = note;
      }
    }
    return newNote;

  };
  filterNotesByQuery(query) { //Works
    let listOfNotes = [];
    for (let note of this._notes) {
      const hasQuery = `${note.title} ${note.body}`.toLowerCase().includes(query.toLowerCase());
      if (hasQuery) {
        listOfNotes.push(note);
      }
    }
    return listOfNotes;


  };
  filterNotesByPriority(priority) { //Works
    let listOfNotes = [];
    for (let note of this._notes) {
      if (note.priority === priority) {
        listOfNotes.push(note)
      }
    }
    return listOfNotes;
  }


}

const ref = {
  ul: document.querySelector('.note-list'),
};

const notepad = new Notepad(initialNotes);
console.log(notepad.notes);


// First variant 

const createTag = ({
  tag,
  className,
  text = '',
  dataSetAction = '',
  id = ''
}) => {
  const createdElement = document.createElement(tag);
  createdElement.classList.add(className);
  createdElement.textContent = text;
  createdElement.dataset.action = dataSetAction;
  createdElement.dataset.id = id;
  return createdElement;

};


const createListItem = (note) => {
  const tagsToCreate = {
    noteCard: {
      tag: 'li',
      className: 'note-list__item',
      id: note.id,
    },
    noteWrapper: {
      tag: 'div',
      className: 'note'
    },


    noteContent: {
      tag: 'div',
      className: 'note__content'
    },
    noteTitle: {
      tag: 'h2',
      className: 'note__title',
      text: note.title,
    },
    noteBody: {
      tag: 'p',
      className: 'note__body',
      text: note.body
    },


    footer: {
      tag: 'footer',
      className: 'note__footer'
    },

    footerSection1: {
      tag: 'section',
      className: 'note__section'
    },
    buttonDecreasePriority: {
      tag: 'button',
      className: 'action',
      dataSetAction: NOTE_ACTIONS.DECREASE_PRIORITY,
    },
    iconArrowDown: {
      tag: 'i',
      className: 'material-icons',
      text: ICON_TYPES.ARROW_DOWN,
    },
    buttonIncreasePriority: {
      tag: 'button',
      className: 'action',
      dataSetAction: NOTE_ACTIONS.INCREASE_PRIORITY,
    },
    iconArrowUp: {
      tag: 'i',
      className: 'material-icons',
      text: ICON_TYPES.ARROW_UP,
    },
    priority: {
      tag: 'span',
      className: 'note__priority',
      text: `Priority:  ${note.priority}`
    },

    footerSection2: {
      tag: 'section',
      className: 'note__section'
    },
    buttonEdit: {
      tag: 'button',
      className: 'action',
      dataSetAction: NOTE_ACTIONS.EDIT,
    },
    iconEdit: {
      tag: 'i',
      className: 'material-icons',
      text: ICON_TYPES.EDIT,
    },
    buttonDelete: {
      tag: 'button',
      className: 'action',
      dataSetAction: NOTE_ACTIONS.DELETE,
    },
    iconDelete: {
      tag: 'i',
      className: 'material-icons',
      text: ICON_TYPES.DELETE,
    },

  }

  const noteCard = createTag(tagsToCreate.noteCard);


  const noteWrapper = createTag(tagsToCreate.noteWrapper);

  const createNoteContent = () => {
    const noteContent = createTag(tagsToCreate.noteContent);
    const noteTitle = createTag(tagsToCreate.noteTitle);
    const noteBody = createTag(tagsToCreate.noteBody);

    noteContent.append(noteTitle, noteBody);
    return noteContent;
  }


  const createNoteFooter = () => {
    const footer = createTag(tagsToCreate.footer);


    const createNoteFooterSection1 = () => {
      const section = createTag(tagsToCreate.footerSection1);

      const buttonDecreasePriority = createTag(tagsToCreate.buttonDecreasePriority);
      const iconArrowDown = createTag(tagsToCreate.iconArrowDown);
      iconArrowDown.classList.add('action__icon');


      const buttonIncreasePriority = createTag(tagsToCreate.buttonIncreasePriority);
      const iconArrowUp = createTag(tagsToCreate.iconArrowUp);
      iconArrowUp.classList.add('action__icon');

      const priority = createTag(tagsToCreate.priority);


      buttonDecreasePriority.append(iconArrowDown);
      buttonIncreasePriority.append(iconArrowUp);
      section.append(buttonDecreasePriority, buttonIncreasePriority, priority)

      return section;
    }

    const createNoteFooterSection2 = () => {
      const section = createTag(tagsToCreate.footerSection2);

      const buttonEdit = createTag(tagsToCreate.buttonEdit);
      const iconEdit = createTag(tagsToCreate.iconEdit);
      iconEdit.classList.add('action__icon');


      const buttonDelete = createTag(tagsToCreate.buttonDelete);
      const iconDelete = createTag(tagsToCreate.iconDelete);
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


const renderNoteList = (listRef, notes) => {
  const renderList = notes.map(note => createListItem(note));
  listRef.append(...renderList);
};
renderNoteList(ref.ul, notepad.notes);
