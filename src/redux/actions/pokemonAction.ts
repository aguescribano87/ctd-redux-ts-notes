import axios from "axios"

const fetchPokemon = () => {
    return {
        type: 'FETCH-POKEMON'
    }
}

const fetchPokemonSuccess = (pokemon: any) => {
    return {
        type: 'FETCH-POKEMON-SUCCESS',
        payload: pokemon
    }
}

const fetchPokemonError = (error: any) => {
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
                dispatch(fetchPokemonSuccess(res.data))
            })
            .catch(error => {
                dispatch(fetchPokemonError(error))
            })
    }
}