import React from 'react';

export default function ArtDisplay({title, year, artist, src}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{year}</p>
            <p>{artist}</p>
            <img src={src} />
        </div>
    );
}