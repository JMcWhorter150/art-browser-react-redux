import React from 'react';

export default function ArtDisplay({title, year, artist, src, handleFavorite}) {
    return (
        <div>
            {title ? 
            <button onClick={() => handleFavorite({title, objectDate: year, artistDisplayName: artist, primaryImageSmall: src})}>Add To Favorites</button>
            :
            ""}
            <h1>{title}</h1>
            <p>{year}</p>
            <p>{artist}</p>
            <img src={src} />
        </div>
    );
}