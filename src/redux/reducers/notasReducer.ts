import { Nota } from "../../type";

const InitialState = {
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
    type: 'CREATE-NEW-NOTE'
    payload: Nota
}

export const notasReducer = (state = InitialState, action: Action) => {
    switch (action.type) {
        case 'CREATE-NEW-NOTE':
            return { notes: [...state.notes, { ...action.payload }] }
            break;

        default:
            return InitialState
            break;
    }
}