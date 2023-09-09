import React, { useState } from 'react';
import './Tile.css';
import { useDispatch, useSelector } from 'react-redux';
import { hoverOverTile, cancelHover, lockTile } from '../../actions/index';

export const Tile = ({ url, text, link, ordinal, isBeingHovered, isLocked }) => {
    const mosaicSideSize = useSelector(state => state.mosaicSideSize);

    const dispatch = useDispatch();

    const onClick = (ordinal) => dispatch(lockTile(ordinal));
    const onMouseEnter = (ordinal) => dispatch(hoverOverTile(ordinal));
    const onMouseLeave = (ordinal) => dispatch(cancelHover(ordinal));

    const onDrag = (e, ordinal) => {
        e.preventDefault();
        console.log(`Moving ${ordinal}`);
        // TODO - Create action in Redux to set swap source
        // Just needs an ordinal setting
    }

    const onDrop = (e, ordinal) => {
        e.preventDefault();
        console.log(`to ${ordinal}`);
        // TODO - Create action in Redux to swap source with this, the destination
        // Just needs another ordinal as destination, action will then perform swap
    }

    const allowDrop = (e) => {
        e.preventDefault();
    }

    if (url) {
        if (isBeingHovered) {
            return (
                <td className="hoverTile"
                    draggable
                    onDrag={(event) => onDrag(event, ordinal)}
                    style={{ backgroundImage: "url(" + url + ")", width: `calc(width / ${mosaicSideSize})`, height: `calc(height / ${mosaicSideSize})` }}

                    onMouseEnter={() => onMouseEnter(ordinal)}
                    onMouseLeave={() => onMouseLeave(ordinal)}>
                    <i className={"lock fa fa-" + (isLocked ? "lock" : "unlock")} onClick={() => onClick(ordinal)}></i>
                    <a className="owner" target="_blank" href={link}>{text}</a>
                </td>
            );
        }
        else {
            return (
                <td className="tile" style={{ backgroundImage: "url(" + url + ")", width: `calc(width / ${mosaicSideSize})`, height: `calc(height / ${mosaicSideSize})` }}
                    draggable
                    onDragOver={(event) => allowDrop(event)}
                    onDrag={(event) => onDrag(event, ordinal)}
                    onDrop={(event) => onDrop(event, ordinal)}
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
