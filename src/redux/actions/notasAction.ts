import { Nota } from "../../type"

export const createNewNote = (note: Nota) => {
    return {
        type: 'CREATE-NEW-NOTE',
        payload: note
    }
}