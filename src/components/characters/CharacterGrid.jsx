import React from 'react'
import Spinner from "../../img/spinner.gif"

import Character from './Character'

const CharacterGrid = ({ items, isLoading }) => {
    return (
        <>
            { isLoading ? (<div className="center">
            <img src={Spinner} alt=""/></div>) : (<section className="cards">
                {
                    items.map((item) => (
                    <Character key={item.char_id} item={item}/>
                    ))
                }
            </section>) }
        </>
    )
}

export default CharacterGrid
