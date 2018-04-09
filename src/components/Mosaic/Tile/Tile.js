import React from 'react';
import './Tile.css';

this.onClick

const Tile = ( { url, text, link, ordinal, onClick } ) => {
    this.onClick = (event) => {
        onClick(ordinal);
    }

    if(url) {
        return (
            <td className="tile" style={{backgroundImage: "url(" + url + ")"}} onClick={this.onClick}>
                <a target="_blank" href={link}>{text}</a>
            </td>
        );
    }
    else
    {
        return (
            <td className="tile"></td>
        );
    }
} 

export default Tile;

