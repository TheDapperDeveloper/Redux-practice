import React from 'react'
import "../styled-components/CardContainer.css"


export default function Cards(props) {
    console.log(props)
    
 
    return (
        <div className="recipe-card">
            <h1>{props.menu.name} </h1>
            <img src={props.menu.image} alt="" />
            <p>{props.menu.description}</p>
        </div>
    )
}
