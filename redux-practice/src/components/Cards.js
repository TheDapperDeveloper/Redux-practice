import React from 'react'
import "../styled-components/CardContainer.css"
import { useSelector } from "react-redux";


export default function Cards() {
    const recipe = useSelector((state) => state.recipe)
 
    return (
        <div className="recipe-card">
            <h1>{recipe.name}</h1>

            
        </div>
    )
}
