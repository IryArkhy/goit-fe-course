import *as api from '../services/api';

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
   getNotes () {
      return api.getNotes().then(notes => {
        return this._notes = notes;
      })
    }
  
    findNoteById(id) { 
      return api.findNote(id).then(note => {
        return note = this._notes.find(note => note.id === id);
      });
    };

    saveNote(note) {
      return api.addNote(note).then(note => {
        this._notes.push(note); 
        return note;
    })
    };
  
    deleteNote(id) { 
      return api.deleteNote(id).then(() => {
       
        return this._notes = this._notes.filter(item => item.id !== id);
    })
    };
  
    updateNoteContent(id, updatedContent) { 
      return api.update(id, updatedContent).then (() => {
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
    })
    };

    updateNotePriority(id, priority) { 
      return api.update(id, priority).then (() => {
        let newNote = {};
          const currentNote = this.findNoteById (id);
          if (currentNote) {
            currentNote.priority = priority;
              newNote = currentNote;
            }
            return newNote;
    })
  };

    filterNotesByQuery(query = '') { 
          const filteredNotesByQuery = this._notes.filter(note =>  `${note.title} ${note.body}`.toLowerCase().includes(query.toLowerCase()));
        return  filteredNotesByQuery;
      };


    filterNotesByPriority(priority) { 
      const filteredNotesByPriority = this._notes.filter(note => note.priority === priority);
     return filteredNotesByPriority;
    }
  }
  

  