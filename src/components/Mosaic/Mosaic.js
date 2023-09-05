import React from 'react';
import TileFrame from '../../containers/TileFrame/TileFrame.js';
import './Mosaic.css';

const MosaicSideSize = 3;

const Mosaic = ({ photos, hoverOverTile, lockedTiles, onClick, onMouseEnter, onMouseLeave }) => {
    const rowOrCol = Array(Math.floor(Math.sqrt(photos.length))).fill();

    let Table = () => (
        <table className="mosaic">
            <tbody>
                {rowOrCol.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {rowOrCol.map((heading, index) => {
                            const ordinal = rowIndex * Math.floor(Math.sqrt(photos.length)) + index;
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

export default Mosaic;

