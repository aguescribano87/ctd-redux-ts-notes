import { Nota } from "../type"
import { NoteItem } from "./noteItem"

interface Props {
    notes: Nota[]
}

export const ListNotes = ({ notes }: Props) => {

    return (
        <>
            {notes.map((nota, i) => (
                <NoteItem key={i} note={nota} />
            ))}
        </>
    )
}