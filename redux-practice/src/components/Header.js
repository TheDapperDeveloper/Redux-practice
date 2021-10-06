import React from 'react'
import { useDispatch} from 'react-redux'
import "../styled-components/HeaderStyle.js"
import { HeaderContainer } from '../styled-components/HeaderStyle.js'
import { RecipeButton } from '../styled-components/HeaderStyle.js'
import { recipeData } from "../components/Recipe";

export default function Header() {
    const dispatch = useDispatch()
    
    return (
        <HeaderContainer>
            <RecipeButton onClick= {() => dispatch({type: "GET_RECIPES", payload:recipeData})}>Recipes</RecipeButton>
           

        </HeaderContainer>
    )
}
