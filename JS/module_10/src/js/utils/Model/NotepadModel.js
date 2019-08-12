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
      for (let note of this._notes) {
        if (note.id === id) return note;
      }
  
  
    };
    saveNote(note) {
      this._notes.push(note);
  
      return note;
    };
  
    deleteNote(id) { 
      this._notes = this._notes.filter(item => item.id !== id);
      return this._notes;
  
    };
  
    updateNoteContent(id, updatedContent) { 
  
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
    updateNotePriority(id, priority) { 
      let newNote = {};
      for (let note of this._notes) {
        if (note.id === id) {
          note.priority = priority;
          newNote = note;
        }
      }
      return newNote;
  
    };
    filterNotesByQuery(query = '') { 
      let listOfNotes = [];
      for (let note of this._notes) {
        const hasQuery = `${note.title} ${note.body}`.toLowerCase().includes(query.toLowerCase());
        if (hasQuery) {
          listOfNotes.push(note);
        }
      }
      return listOfNotes;
  
    };
    filterNotesByPriority(priority) { 
      let listOfNotes = [];
      for (let note of this._notes) {
        if (note.priority === priority) {
          listOfNotes.push(note)
        }
      }
      return listOfNotes;
    }
  
  }
  

  