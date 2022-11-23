import { Nota } from "../../type"

export const createNewNote = (note: Nota) => {
    return {
        type: 'CREATE-NEW-NOTE',
        payload: note
    }
}

export const removeNote = (note: Nota) => {
    return {
        type: 'DELETE-NEW-NOTE',
        payload: note
    }
}