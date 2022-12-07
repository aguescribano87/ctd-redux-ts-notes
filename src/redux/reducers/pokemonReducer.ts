import { PokemonData } from "../../type"

interface Reducer {
    initialState: {
        loading: boolean
        pokemon: null | PokemonData
        error: null
    }
    actions: {
        type: 'FETCH-POKEMON' | 'FETCH-POKEMON-SUCCESS' | 'FETCH-POKEMON-ERROR'
        payload?: PokemonData | String
    }
}

const initialState: Reducer['initialState'] = {
    loading: false,
    pokemon: null,
    error: null
}

export const pokemonReducer = (state = initialState, actions: Reducer['actions']) => {
    switch (actions.type) {
        case 'FETCH-POKEMON':
            return {
                ...state,
                loading: true
            }
        case 'FETCH-POKEMON-SUCCESS':
            return {
                ...state,
                loading: false,
                pokemon: actions.payload,
                error: null
            }
        case 'FETCH-POKEMON-ERROR':
            return {
                ...state,
                loading: false,
                pokemon: null,
                error: actions.payload
            }

        default:
            return initialState
    }

}