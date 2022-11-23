import { Nota } from "../../type";

const InitialState: { notes: Nota[] } = {
    notes: [
        {
            id: 1,
            text: "Hola a todos"
        },
        {
            id: 2,
            text: "Mañana juega la SCALONETA"
        }
    ]
}

interface Action {
    type: 'CREATE-NEW-NOTE' | 'DELETE-NEW-NOTE'
    payload: Nota
}

export const notasReducer = (state = InitialState, action: Action) => {
    switch (action.type) {
        case 'CREATE-NEW-NOTE':
            return { notes: [...state.notes, { ...action.payload }] }
        case 'DELETE-NEW-NOTE':
            return { notes: [...state.notes.filter(n => n.id !== action.payload.id)] }

        default:
            return InitialState
    }
}