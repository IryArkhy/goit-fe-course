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



// Second variant

/*
const createListItem = (note) => {

  const noteCard = document.createElement('li');
  noteCard.classList.add('note-list__item');
  noteCard.dataset.id = note.id;

  const noteWrapper = document.createElement('div');
  noteWrapper.classList.add('note');


  const createNoteContent = () => {
    const noteContent = document.createElement('div');
    noteContent.classList.add('note__content');

    const noteTitle = document.createElement('h2');
    noteTitle.classList.add('note__title');
    noteTitle.textContent = note['title'];

    const noteBody = document.createElement('p');
    noteBody.classList.add('note__body');
    noteBody.textContent = note['body'];
    

    noteContent.append(noteTitle, noteBody);
    return noteContent;
  }

  const noteContent = createNoteContent();
 

  const createNoteFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('note__footer');

    const createNoteFooterSection1 = () => {
      const section = document.createElement('section');
      section.classList.add('note__section');

      const buttonDecreasePriority = document.createElement('button');
      buttonDecreasePriority.classList.add('action');
      buttonDecreasePriority.dataset.action = NOTE_ACTIONS.DECREASE_PRIORITY;

      const iconArrowDown = document.createElement('i');
      iconArrowDown.classList.add('material-icons', 'action__icon');
      iconArrowDown.textContent = ICON_TYPES.ARROW_DOWN;

      const buttonIncreasePriority = document.createElement('button');
      buttonIncreasePriority.classList.add('action');
      buttonIncreasePriority.dataset.action = NOTE_ACTIONS.INCREASE_PRIORITY;

      const iconArrowUp = document.createElement('i');
      iconArrowUp.classList.add('material-icons', 'action__icon');
      iconArrowUp.textContent = ICON_TYPES.ARROW_UP;

      const priority = document.createElement('span');
      priority.classList.add('note__priority');
      priority.textContent = `Priority: ${note.priority}`;

      buttonDecreasePriority.append(iconArrowDown);
      buttonIncreasePriority.append(iconArrowUp);
      section.append(buttonDecreasePriority, buttonIncreasePriority,priority)

      return section;
    }

    const firstSection = createNoteFooterSection1()

    const createNoteFooterSection2 = () => {
      const section = document.createElement('section');
      section.classList.add('note__section');

      const buttonEdit = document.createElement('button');
      buttonEdit.classList.add('action');
      buttonEdit.dataset.action = NOTE_ACTIONS.EDIT;

      const iconEdit = document.createElement('i');
      iconEdit.classList.add('material-icons', 'action__icon');
      iconEdit.textContent = ICON_TYPES.EDIT;

      const buttonDelete = document.createElement('button');
      buttonDelete.classList.add('action');
      buttonDelete.dataset.action = NOTE_ACTIONS.DELETE;

      const iconDelete = document.createElement('i');
      iconDelete.classList.add('material-icons', 'action__icon');
      iconDelete.textContent = ICON_TYPES.DELETE;

      buttonEdit.append(iconEdit);
      buttonDelete.append(iconDelete);
      section.append(buttonEdit, buttonDelete);

      return section;
    }

    const secondSection = createNoteFooterSection2();

    footer.append(firstSection, secondSection);

    return footer;
  }

  const footer = createNoteFooter();

  noteWrapper.append(noteContent, footer);
  noteCard.append(noteWrapper);

  return noteCard;
}
*/

const renderNoteList = (listRef, notes) => {
  const renderList = notes.map(note => createListItem(note));
  listRef.append(...renderList);
};
renderNoteList(ref.ul, notepad.notes);
