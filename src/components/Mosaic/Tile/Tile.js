import React from 'react';
import './Tile.css';

 const Tile = ( { url } ) => {
    return (
        <td className="tile" style={{backgroundImage: "url(" + url + ")"}}></td>
    );
} 

export default Tile;

