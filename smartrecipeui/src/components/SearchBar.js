import React, { useState, useEffect } from 'react'
import { useDispatch, connect } from 'react-redux';

const SearchBar = ({ recipes }) => {
    const [currentValue, setCurrentValue] = useState("");
    const [currentSelect, setCurrentSelect] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
            dispatch({ type: 'recipe/request' });
            try {
                const result = await fetch(`http://localhost:3000/recipe/api/getData`)
                console.log(result);
                const res = await result.json();

                dispatch({ type: 'recipe/success', data: res.data });
                dispatch({ type: 'selectedRecipe/success', data: res.data });
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [dispatch]);

    const _handleClick = async () => {

        const selectedRecipes = recipes.filter(recipes => {

            return recipes.response.category === currentSelect;
        });
        console.log(selectedRecipes);

        dispatch({ type: 'selectedRecipe/success', data: selectedRecipes });

    };

    const _handleChange = event => {

        setCurrentValue(event.target.value);
        change(currentValue); //en yakın seçenek getirildi.
        _handleClick();
    }

    const change = (currentValue) => {
        console.log(currentValue)

        const array = [];
        for (let i = 0; i < recipes.length; i++) {
            array.push(recipes[i].response.category);
        }

        for (let j = 0; j < array.length; j++) {
            const string = array[j]
            const obj = string.includes(currentValue);
            if (obj === true && currentValue !== "") {
                setCurrentSelect(array[j]);
                console.log(currentSelect)
            }
        }
    }

    return (
        <>
            <div className="search">
                <div className="input-group mb-3">
                    <input onChange={_handleChange} className="form-control" placeholder="Hangi kategoride yemek istersiniz?" aria-describedby="button-addon2" />
                </div>
            </div>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        recipes: state.app.recipes
    };
}
export default connect(mapStateToProps)(SearchBar);