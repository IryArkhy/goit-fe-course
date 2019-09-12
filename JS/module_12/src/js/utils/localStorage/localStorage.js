import {initialNotes} from "../index";

const load = key => {
  try {
    const localStorageNotes = localStorage.getItem(key);
    return localStorageNotes === null ? initialNotes : JSON.parse(localStorageNotes);
  } catch (err) {
    console.error("Get state error: ", err);
  }
};

const save = (key, value) => {
  try {
    const newNoteValue = JSON.stringify(value);
    localStorage.setItem(key, newNoteValue);
  } catch (err) {
    console.error("Get state error: ", err);
  }
};

const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error("Get state error: ", err);
  }
};

export default { load, save, remove  };