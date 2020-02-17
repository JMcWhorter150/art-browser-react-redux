import React from 'react';

export default function ArtList({artList, handleSelect}) {
    const artstuff = artList.map((id, i) => <li onClick={() => {handleSelect(id)}} key={i}>{id}</li>);
    return (
        <ul>
            {artstuff}
        </ul>
    )
}