import { useState } from "react"
import { useDispatch } from "react-redux"
import { createNewNote } from "../redux/actions/notasAction"
import { Nota } from "../type"

interface Props {
    cant: Number
}

export const CreateNote = ({ cant }: Props) => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState<Nota>({ id: 0, text: "" })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(
            { id: cant, text: event.target.value })
    }

    const handleCreate = () => dispatch(createNewNote(inputValue))

    return (
        <>
            <input placeholder='New note' onChange={handleChange} />
            <button onClick={handleCreate}>Crear</button>
        </>
    )
}