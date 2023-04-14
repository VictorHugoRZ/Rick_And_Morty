import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = {
    myFavorites: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case REMOVE_FAV:
            const removedCharacter = state.myFavorites.filter((character) => character.id !== action.payload);
            return {
                ...state,
                myFavorites: removedCharacter
            }
        default:
            return {
                ...state
            }
    }
}
