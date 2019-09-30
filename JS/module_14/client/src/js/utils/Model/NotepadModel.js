import * as api from '../services/api';
import {
  Notyf
} from "notyf";
import {
  NOTIFICATION_MESSAGES
} from '../constants/constants';

const notyf = new Notyf();

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
  async getNotes() {
    try {
      const getNotes = await api.getNotes(); // 
      return this._notes = await getNotes;
    } catch (error) {
      console.log(Error, "Error while getting notes");

    }
  };

  findNoteById(id) {
    return this._notes.find(note => note.id === id);
  };

  async saveNote(note) {
    try {
      await api.addNote(note);
      this._notes.push(note);
      return note;
    } catch (error) {
      console.log(Error, "Error while saving note");

    }
  };

  async deleteNote(id) {
    try {
      await api.deleteNote(id);
      this._notes =  this._notes.filter(item => item.id !== id);
      return this._notes;
    } catch (error) {
      throw error;
    }
  };

  async updateNoteContent(id, updatedContent) {
    try {
      let newNote = {};

      await api.update(id, updatedContent);
      const currentNote = await this.findNoteById(id);
      let indexOfNewNote = this._notes.indexOf(currentNote);
      if (currentNote) {
        newNote = await {
          ...currentNote,
          ...updatedContent
        };
        this._notes[indexOfNewNote] = newNote;
      }
      return newNote;
    } catch (error) {
      console.log(Error, "Error while updating note content");
      notyf.error(NOTIFICATION_MESSAGES.ERROR);
    }
  };

  async updateNotePriority(id, priority) {
    try {
      let newNote = {};
      await api.update(id, priority);
      const currentNote = this.findNoteById(id);
      if (currentNote) {
        currentNote.priority = priority;
        newNote = currentNote;
      }
      return newNote;
    } catch (error) {
      console.log(Error, "Error while updating note priority");
      notyf.error(NOTIFICATION_MESSAGES.ERROR);
    }

  };

  filterNotesByQuery(query = '') {
    const filteredNotesByQuery = this._notes.filter(note => `${note.title} ${note.body}`.toLowerCase().includes(query.toLowerCase()));
    return filteredNotesByQuery;
  };


  filterNotesByPriority(priority) {
    const filteredNotesByPriority = this._notes.filter(note => note.priority === priority);
    return filteredNotesByPriority;
  }
}