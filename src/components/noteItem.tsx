import { Nota } from "../type"

interface Props {
    note: Nota
}

export const NoteItem = ({ note }: Props) => {

    return (
        <div>
            <p>{note.text}</p>
            <button>delete</button>
        </div>
    )
}