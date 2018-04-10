import React from 'react';
import './Tile.css';

const Tile = ( { url, text, link, ordinal, isBeingHovered, isLocked, onClick, onMouseEnter, onMouseLeave } ) => {
    this.onClick = (event) => {
        onClick(ordinal);
    }

    this.onMouseEnter = (event) => {
        onMouseEnter(ordinal);
    }

    this.onMouseLeave = (event) => {
        onMouseLeave(ordinal);
    }

    if(url) {
        if(isBeingHovered) {
            return (
                <td className="tile" 
                    style={{backgroundImage: "url(" + url + ")"}} 
                    onClick={this.onClick} 
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}>
                    <i className={"lock fa fa-" +  (isLocked ? "lock" : "unlock")}></i>
                    <a className="owner" target="_blank" href={link}>{text}</a>
                </td>
            );
        }
        else
        {
            return (
                <td className="tile" style={{backgroundImage: "url(" + url + ")"}} onClick={this.onClick} onMouseEnter={ this.onMouseEnter }>
                </td>
            );
        }
    }
    else
    {
        return (
            <td className="tile"></td>
        );
    }
} 

export default Tile;

