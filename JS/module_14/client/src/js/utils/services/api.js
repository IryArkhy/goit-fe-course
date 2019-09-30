import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/notes";

export const getNotes = async () => {
  try {
    const response = await axios.get();
    const data = await response.data;
    return data;
  } catch {
    throw new Error('Error while fetching in function geNotes()' + error.statusText);
  }
};

export const addNote = async (note) => {
  try {
    const response = await axios.post("", note);
    const data = await response.data;

    return data;
  } catch {
    throw new Error('Error while posting in function addItem()');
  }
}

export const deleteNote = async id => {
  try {
    const response = await axios.delete(`/${id}`);
    const data = await response.data;
    return data;
  } catch {
    throw new Error(`Error while deleting in function deleteNote(), ${response.statusText}`);
  }
}

export const update = async (id, updatedNote) => {
  try {
    const response = await axios.patch(`/${id}`, updatedNote);
    const data = await response.data;
    return data;
  } catch {
    throw new Error()('Error while fetching in function update()');
  }
}

export const findNote = async (id) => {
  try {
    const foundNote = axios.get(`${URL}/${id}`);
    return foundNote.data;
  } catch {
    throw new Error()('Error while fetching in function findNote()');
  }
}