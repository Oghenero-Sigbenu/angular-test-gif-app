import React from "react";
import {NavLink} from "react-router-dom";
import striptags from 'striptags';

const GifCards = ({gifs, isLoading}) => {
    return (
        <>
        {!isLoading ? (
            <>
        <div className="card-box">
            { gifs.map( (gif) => (
                <div key={gif.id} >
                <NavLink to={`detail/` + gif.id}>
                <div className="card">
                    <img src={gif.images.original.url} alt={gif.title}/>
                </div>
                    <p>{striptags(gif.title.charAt(0).toUpperCase() + gif.title.slice(1)).slice(0, 15) + "..."}</p>
                </NavLink>
                </div>
                ))}
        </div> 
        </> ) 
        : "load" }
        </>
    )
}

export default GifCards;