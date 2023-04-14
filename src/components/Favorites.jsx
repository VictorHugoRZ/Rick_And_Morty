import Card from "./Card";
import { filterCards, orderCards } from '../redux/actions';
import { connect, useDispatch } from 'react-redux';
import { useState } from "react";

const Favorites = ({ myFavorites }) => {

    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(!aux);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }

    return (
        <div>
            <select onChange={handleOrder} name="selector1" id="1">
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter} name="selector2" id="2">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name} 
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                            onClose={fav.onClose}
                        />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);