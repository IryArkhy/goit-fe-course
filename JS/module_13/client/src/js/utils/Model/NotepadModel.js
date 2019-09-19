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
      return api.update(id, updatedContent).then (updatedNote => {
        this._notes.map(note => {
            note.id === updatedNote.id ? updatedNote : note;
        })

        return updatedNote;
    })
    };

    updateNotePriority(id, priority) { 
      return api.update(id, priority).then (updatedNote => {
        this._notes.map(note => {
            note.id === updatedNote.id ? updatedNote : note;
        })

        return updatedNote;
    })
  
    };

    filterNotesByQuery(query = '') { 
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
          const filteredNotesByQuery = this._notes.filter(note =>  `${note.title} ${note.body}`.toLowerCase().includes(query.toLowerCase()));
          resolve (filteredNotesByQuery);
          reject("Error");
        }, 300);
      })

    };

    filterNotesByPriority(priority) { 
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
          const filteredNotesByPriority = this._notes.filter(note => note.priority === priority);
          resolve (filteredNotesByPriority);
          reject("Error");
        }, 300);
      }) 
    }
  }
  

  