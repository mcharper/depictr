import React from 'react';
import { useSelector } from 'react-redux';
import TileFrame from '../../containers/TileFrame/TileFrame.js';
import './Mosaic.css';

export const Mosaic = ({ photos, hoverOverTile, lockedTiles, onClick, onMouseEnter, onMouseLeave }) => {
    const mosaicSideSize = useSelector(state => state.mosaicSideSize);
    const rowOrCol = Array(Number.parseInt(mosaicSideSize)).fill();

    let Table = () => (
        <table className="mosaic">
            <tbody>
                {rowOrCol.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {rowOrCol.map((heading, index) => {
                            const ordinal = rowIndex * Number.parseInt(mosaicSideSize) + index;
                            return <td key={index}>
                                <TileFrame url={photos[ordinal].url}
                                    text={photos[ordinal].owner}
                                    link={photos[ordinal].link}
                                    ordinal={ordinal.toString()}
                                    onClick={() => onClick(ordinal.toString())}
                                    onMouseEnter={() => onMouseEnter(ordinal.toString())}
                                    onMouseLeave={() => onMouseLeave(ordinal.toString())}
                                    isBeingHovered={hoverOverTile == ordinal}
                                    isLocked={lockedTiles[ordinal]}
                                />
                            </td>
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (<Table />);
};
