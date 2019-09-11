import template from '../../../templates/notes.hbs'

export const createListItem = note => {
  return template(note);
};
