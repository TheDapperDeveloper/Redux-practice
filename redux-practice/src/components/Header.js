import React from 'react'
import { useDispatch } from 'react-redux'

export default function Header(props) {
    const dispatch = useDispatch
    return (
        <div>
            <button onClick= {() => dispatch({type: "GET_RECIPES"})}>Recipes</button>

        </div>
    )
}
