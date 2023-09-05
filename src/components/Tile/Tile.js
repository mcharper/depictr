import React from 'react';
import './Tile.css';

export const Tile = ({ url, text, link, ordinal, isBeingHovered, isLocked, onClick, onMouseEnter, onMouseLeave }) => {
    if (url) {
        if (isBeingHovered) {
            return (
                <td className="tile"
                    draggable
                    style={{ backgroundImage: "url(" + url + ")" }}
                    onClick={() => onClick(ordinal)}
                    onMouseEnter={() => onMouseEnter(ordinal)}
                    onMouseLeave={() => onMouseLeave(ordinal)}>
                    <i className={"lock fa fa-" + (isLocked ? "lock" : "unlock")}></i>
                    <a className="owner" target="_blank" href={link}>{text}</a>
                </td>
            );
        }
        else {
            return (
                <td className="tile" style={{ backgroundImage: "url(" + url + ")" }}
                    onClick={() => onClick(ordinal)}
                    onMouseEnter={() => onMouseEnter(ordinal)}
                    onMouseLeave={() => onMouseLeave(ordinal)}>
                </td>
            );
        }
    }
    else {
        return (
            <td className="tile"></td>
        );
    }
};
