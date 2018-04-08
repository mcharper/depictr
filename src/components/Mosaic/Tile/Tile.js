import React from 'react';
import './Tile.css';

 const Tile = ( { url, text, link } ) => {
    if(url) {
        return (
            <td className="tile" style={{backgroundImage: "url(" + url + ")"}}>
                <a target="_blank" href={link}>{text}</a>
            </td>
        );
    }
    else
    {
        return (
            <td className="tile">{text}</td>
        );
    }
} 

export default Tile;

