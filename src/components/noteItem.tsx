import { useDispatch } from "react-redux"
import { removeNote } from "../redux/actions/notasAction"
import { Nota } from "../type"

interface Props {
    note: Nota
}

export const NoteItem = ({ note }: Props) => {
    const dispatch = useDispatch()

    const handleDelete = () => dispatch(removeNote(note))

    return (
        <div>
            <p>{note.text}</p>
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}