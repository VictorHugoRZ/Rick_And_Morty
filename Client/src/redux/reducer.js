import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case FILTER:
            const sameGender = state.allCharacters.filter((character) => character.gender === action.payload)
            return {
                ...state,
                myFavorites: sameGender
            }
        case ORDER:
            const allCharactersCopy = [...state.allCharacters]
            return {
                ...state,
                myFavorites:
                state.payload === 'A'
                ? allCharactersCopy.sort((a, b) => a.id - b.id)
                : allCharactersCopy.sort((a, b) => b.id - a.id)
            }
        default:
            return {
                ...state
            }
    }
}
