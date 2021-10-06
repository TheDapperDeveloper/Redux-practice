import React from 'react'
import { useSelector } from 'react-redux'
import Cards from './Cards'
import "../styled-components/CardContainer.css"


export default function CardContainer() {
    const recipe = useSelector((state) => state.recipes)
    console.log(recipe)
   
    return (
        <div >
            {recipe.map((menu) => <Cards menu={menu}/>)}
            
        
        </div>
    )
}
