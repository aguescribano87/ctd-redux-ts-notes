import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemon } from "../redux/actions/pokemonAction"
import { PokemonData } from "../type"

interface PokemonResponse {
    loading: boolean
    pokemon: PokemonData
    error: null | string
}

export const Pokemon = () => {
    const dispatch = useDispatch()
    const pokemon = useSelector<{ pokemon: PokemonResponse }, PokemonResponse>(state => state.pokemon)
    const [inputValue, setInputValue] = useState<String>("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)
    const handleSerch = () => dispatch(getPokemon(inputValue))

    return (
        <div className="pokemonCont">
            <input placeholder='Nombre del pokémon' onChange={handleChange} />
            <button onClick={handleSerch}>Buscar</button>

            {pokemon.pokemon && <div>
                <h1>{pokemon.pokemon.name}</h1>
                <img height={300} src={pokemon.pokemon.front_default} alt="Imagen Pokemon" />
            </div>}
            {pokemon.loading && "Cargando..."}
            {pokemon.error}
        </div>
    )
}