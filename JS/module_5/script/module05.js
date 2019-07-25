

const Notepad = function Notepad(notes = []) {
    this.notes = notes;
    this.getNotes = function () {
        return this.notes;
    };
    this.findNoteById = function (id) { //Works
        for (let note of this.notes) {
            if (note.id === id) return note;
        }


    };
    this.saveNote = function (note) { //Works
        this.notes.push(note);
        return note;
    };
    this.deleteNote = function (id) { //Works
        for (let note of this.notes) {
            if (note.id === id) {
                let indexOfNote = this.notes.indexOf(note);
                this.notes.splice(indexOfNote, 1);
            }
        }

    };
    this.updateNoteContent =  function (id, updatedContent) { //Works

        let newNote = {};
        let indexOfNewNote;
        for (let note of this.notes) {
            if (note.id === id) {
                indexOfNewNote = this.notes.indexOf(note);
                newNote = {
                    ...note,
                    ...updatedContent
                };
                this.notes[indexOfNewNote] = newNote;
            }
        }
        return newNote;


    };
    this.updateNotePriority = function (id, priority) { //Works
        let newNote = {};
        for (let note of this.notes) {
            if (note.id === id) {
                note.priority = priority;
                newNote = note;
            }
        }
        return newNote;

    };
    this.filterNotesByQuery = function (query) { //Works
        let listOfNotes = [];
        for (let note of this.notes) {
            const hasQuery = `${note.title} ${note.body}`.toLowerCase().includes(query.toLowerCase());
            if (hasQuery) {
                listOfNotes.push(note);
            }
        }
        return listOfNotes;


    };
    this.filterNotesByPriority = function (priority) { //Works
        let listOfNotes = [];
        for (let note of this.notes) {
            if (note.priority === priority) {
                listOfNotes.push(note)
            }
        }
        return listOfNotes;
    }
};

Notepad.Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
};






//CHECKING

const initialNotes = [{
        id: 'id-1',
        title: 'JavaScript essentials',
        body: 'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
        priority: Notepad.Priority.HIGH,
    },
    {
        id: 'id-2',
        title: 'Refresh HTML and CSS',
        body: 'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
        priority: Notepad.Priority.NORMAL,
    },
];

const notepad = new Notepad(initialNotes);

/*
 * Смотрю что у меня в заметках после инициализации
 */
console.log('Все текущие заметки: ', notepad.getNotes());

/*
 * Добавляю еще 2 заметки и смотрю что получилось
 */
notepad.saveNote({
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body: 'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: Notepad.Priority.NORMAL,
});

notepad.saveNote({
    id: 'id-4',
    title: 'Winter clothes',
    body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: Notepad.Priority.LOW,
});

console.log('Все текущие заметки: ', notepad.getNotes());

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL);

console.log(
    'Заметки после обновления приоритета для id-4: ',
    notepad.getNotes(),
);

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority('id-3', Notepad.Priority.LOW);

console.log(
    'Заметки после обновления приоритета для id-3: ',
    notepad.getNotes(),
);

/*
 * Решил отфильтровать заметки по слову html
 */
console.log(
    'Отфильтровали заметки по ключевому слову "html": ',
    notepad.filterNotesByQuery('html'),
);

/*
 * Решил отфильтровать заметки по слову javascript
 */
console.log(
    'Отфильтровали заметки по ключевому слову "javascript": ',
    notepad.filterNotesByQuery('javascript'),
);

/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */
console.log(
    'Отфильтровали заметки по нормальному приоритету: ',
    notepad.filterNotesByPriority(Notepad.Priority.NORMAL),
);

/*
 * Обновим контент заметки с id-3
 */
notepad.updateNoteContent('id-3', {
    title: 'Get comfy with React.js or Vue.js',
});

console.log(
    'Заметки после обновления контента заметки с id-3: ',
    notepad.getNotes(),
);

/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */
notepad.deleteNote('id-2');
console.log('Заметки после удаления с id -2: ', notepad.getNotes());