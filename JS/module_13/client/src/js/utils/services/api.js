const URL = 'http://localhost:3000/notes';

export const getNotes = () => {
    return fetch(URL).then( response => {
        if (response.ok) return response.json();
        throw new Error () ('Error while fetching in function geNotes()' + response.statusText);
    })
};

export const addNote = (note) => {
    const opntions = {
        method : "POST",
        headers : {
            'Content-Type' : "application/json "
        },
        body : JSON.stringify(note),
    }
    return fetch(URL, opntions).then( response => { 
        if (response.ok) return response.json();

        throw new Error () ('Error while fetching in function addItem()' + response.statusText);
    })
}

export const deleteNote = (id) => {
    const opntions = {
        method : "DELETE"
    }
    return fetch(`${URL}/${id}`, opntions).then( response => { 
        if (response.ok) return response.json();

        throw new Error () ('Error while fetching in function deleteNote()' + response.statusText);
    })
}

export const update = (id, updatedNote) => {
    const opntions = {
        method : "PATCH",
        headers : {
            'Content-Type' : "application/json "
        },
        body : JSON.stringify(updatedNote),
    }
    return fetch(`${URL}/${id}`, opntions).then( response => {
        if (response.ok) return response.json();

        throw new Error () ('Error while fetching in function addItem()' + response.statusText);
    })
}

export const findNote = (id) => {
    return fetch(`${URL}/${id}`).then( response => {
        if (response.ok) return response.json();

        throw new Error () ('Error while fetching in function geNotes()' + response.statusText);
    })
}