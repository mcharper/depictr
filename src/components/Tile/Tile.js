import React from 'react';
import './Tile.css';
import { useDispatch, useSelector } from 'react-redux';
import { hoverOverTile, cancelHover, lockTile } from '../../actions/index';

export const Tile = ({ url, text, link, ordinal, isBeingHovered, isLocked }) => {
    const mosaicSideSize = useSelector(state => state.mosaicSideSize);
    const dispatch = useDispatch();

    const onClick = (ordinal) => dispatch(lockTile(ordinal));
    const onMouseEnter = (ordinal) => dispatch(hoverOverTile(ordinal));
    const onMouseLeave = (ordinal) => dispatch(cancelHover(ordinal));

    if (url) {
        if (isBeingHovered) {
            return (
                <td className="tile"
                    draggable
                    style={{ backgroundImage: "url(" + url + ")" }}
                    onClick={() => onClick(ordinal)}
                    onMouseEnter={() => onMouseEnter(ordinal)}
                    onMouseLeave={() => onMouseLeave(ordinal)}>
                    <div style={{ width: `calc(30vw / ${mosaicSideSize})`, height: `calc(30vw / ${mosaicSideSize})` }}>
                        <i className={"lock fa fa-" + (isLocked ? "lock" : "unlock")}></i>
                        <a className="owner" target="_blank" href={link}>{text}</a>
                    </div>
                </td>
            );
        }
        else {
            return (
                <td className="tile" style={{ backgroundImage: "url(" + url + ")" }}
                    onClick={() => onClick(ordinal)}
                    onMouseEnter={() => onMouseEnter(ordinal)}
                    onMouseLeave={() => onMouseLeave(ordinal)}>
                    <div style={{ width: `calc(30vw / ${mosaicSideSize})`, height: `calc(30vw / ${mosaicSideSize})` }}>
                    </div>
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
