import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";
import axios from "axios";

export const addFav = (character) => {
   try {
    const endpoint = 'http://localhost:3002/rickandmorty/fav';
    return async (dispatch) => {
       const { data } = await axios.post(endpoint, character)
       if (data) {
          return dispatch({
                type: ADD_FAV,
                payload: data,
          });
       }
    };
   } catch (error) {
      throw error
   }
 };

 export const removeFav = (id) => {
   try {
    const endpoint = 'http://localhost:3002/rickandmorty/fav/' + id;
    return async (dispatch) => {
       const { data } = await axios.delete(endpoint)
       if (data) {
          return dispatch({
                type: REMOVE_FAV,
                payload: data,
       });
       };
    };
   } catch (error) {
      throw error
   }
 };

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender }
}

export const orderCards = (order) => {
    return { type: ORDER, payload: order }
}