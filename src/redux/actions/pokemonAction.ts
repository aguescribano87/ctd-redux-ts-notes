import axios from "axios"
import { PokemonData } from "../../type"

const fetchPokemon = () => {
    return {
        type: 'FETCH-POKEMON'
    }
}

const fetchPokemonSuccess = (pokemon: PokemonData) => {
    return {
        type: 'FETCH-POKEMON-SUCCESS',
        payload: pokemon
    }
}

const fetchPokemonError = (error: String) => {
    return {
        type: 'FETCH-POKEMON-ERROR',
        payload: error
    }
}

export const getPokemon = (name: String): any => {
    return (dispatch: any) => {
        dispatch(fetchPokemon())
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => {
                const { name, sprites } = res.data
                const { front_default } = sprites

                dispatch(fetchPokemonSuccess({ name, front_default }))
            })
            .catch(error => {
                const { message } = error
                dispatch(fetchPokemonError(message))
            })
    }
}