import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemon } from "../redux/actions/pokemonAction"

export const Pokemon = () => {
    const dispatch = useDispatch()
    const pokemon = useSelector<any, any>(state => state.pokemon)
    const [inputValue, setInputValue] = useState<String>("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)
    const handleSerch = () => dispatch(getPokemon(inputValue))

    return (
        <div className="pokemonCont">
            <input placeholder='Nombre del pokémon' onChange={handleChange} />
            <button onClick={handleSerch}>Buscar</button>

            {pokemon.pokemon && <div>
                <h1>{pokemon.pokemon.name}</h1>
                <img height={300} src={pokemon.pokemon.sprites.front_default} alt="Imagen Pokemon" />
            </div>}
            {pokemon.loading && "Cargando..."}
            {pokemon.error && "Hay un error"}
        </div>
    )
}