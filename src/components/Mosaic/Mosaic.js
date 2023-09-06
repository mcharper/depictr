import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelHover, lockTile } from '../../actions/index.js';
import { Tile } from '../../components/Tile/Tile.js';
import './Mosaic.css';

export const Mosaic = () => {
    const mosaicSideSize = useSelector(state => state.mosaicSideSize);
    const photos = useSelector(state => state.photos);
    const hoverOverTile = useSelector(state => state.hoverOverTile);
    const lockedTiles = useSelector(state => state.lockedTiles);
    const dispatch = useDispatch();

    const rowOrCol = Array(Number.parseInt(mosaicSideSize)).fill();

    const onClick = (ordinal) => dispatch(lockTile(ordinal));
    const onMouseEnter = (ordinal) => dispatch(hoverOverTile(ordinal));
    const onMouseLeave = (ordinal) => dispatch(cancelHover(ordinal));

    let Table = () => (
        <table className="mosaic">
            <tbody>
                {rowOrCol.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {rowOrCol.map((heading, index) => {
                            const ordinal = rowIndex * Number.parseInt(mosaicSideSize) + index;
                            return <td key={index}>
                                <Tile url={photos[ordinal].url}
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
