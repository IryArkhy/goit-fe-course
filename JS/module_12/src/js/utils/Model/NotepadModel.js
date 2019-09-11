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
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
         const foundNote = this._notes.find(note => note.id === id);
          resolve(foundNote);
          reject("Error");
        }, 300)
      })
    };
    saveNote(note) {
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
          this._notes.push(note);
          resolve(note);
          reject("Error");
        }, 300)
      })
    };
  
    deleteNote(id) { 
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
          this._notes = this._notes.filter(item => item.id !== id);
          resolve(this._notes);
          reject("Error");
        }, 300)
      })
    };
  
    updateNoteContent(id, updatedContent) { 
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
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
          resolve(newNote);
          reject("Error");
        }, 300)
      })
    };

    updateNotePriority(id, priority) { 
      return new Promise ((resolve, reject) => {
        setTimeout (() => {
          let newNote = {};
          const currentNote = this.findNoteById (id);
          if (currentNote) {
            currentNote.priority = priority;
              newNote = currentNote;
          }
          resolve(newNote);
          reject("Error");
        }, 300)
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
  

  