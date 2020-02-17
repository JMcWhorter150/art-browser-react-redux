import React from 'react';

export default function FavoriteList( {favorites, handleClick}) {
    return (
        <ul>
            {favorites ? favorites.map((item, i) => (<li onClick={() => handleClick(i)} key={i + "A"}>{item}</li>))
            :
            ""}
        </ul>
    );
}