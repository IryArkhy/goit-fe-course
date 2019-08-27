export default class Notepad {

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
  
    findNoteById(id) { 
      return this._notes.find(note => note.id === id);
    };
    saveNote(note) {
      this._notes.push(note);
  
      return note;
    };
  
    deleteNote(id) { 
      return  this._notes = this._notes.filter(item => item.id !== id);
  
    };
  
    updateNoteContent(id, updatedContent) { 
  
      let newNote = {};
      const currentNote = this.findNoteById (id);
      let indexOfNewNote = this._notes.indexOf(currentNote);
    if (currentNote){
      newNote = {
        ...currentNote,
        ...updatedContent
      };
      this._notes[indexOfNewNote] = newNote;
    }
      return newNote;
  
    };

    updateNotePriority(id, priority) { 
      let newNote = {};
      const currentNote = this.findNoteById (id);
      if (currentNote) {
        currentNote.priority = priority;
          newNote = currentNote;
      }
      return newNote;
  
    };

    filterNotesByQuery(query = '') { 
    return this._notes.filter(note =>  `${note.title} ${note.body}`.toLowerCase().includes(query.toLowerCase()));
    };

    filterNotesByPriority(priority) { 
     return this._notes.filter(note => note.priority === priority);
    }
  
  }
  

  