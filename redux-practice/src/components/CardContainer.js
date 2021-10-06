import React from 'react'
import { useSelector } from 'react-redux'

import "../styled-components/CardContainer.css"
import Cards from './Cards'

export default function CardContainer() {
    const recipe = useSelector((state) => state.recipe)
    console.log(recipe)
   
    return (
        <div className="card-container">
            {recipe.map((i) => <Cards item={i}/>)}
            
        
        </div>
    )
}
