import React from 'react';

export default function ArtDisplay({title, year, artist, src, objectID, handleFavorite}) {
    return (
        <div>
            {title ? 
            <button onClick={() => handleFavorite(objectID)}>Add To Favorites</button>
            :
            ""}
            <h1>{title}</h1>
            <p>{year}</p>
            <p>{artist}</p>
            <img src={src} />
        </div>
    );
}