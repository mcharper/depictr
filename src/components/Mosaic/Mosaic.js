import React from 'react';
import Tile from './Tile/Tile';
import './Mosaic.css';

const Mosaic = ( { photos, hoverOverTile, lockedTiles, onClick, onMouseEnter, onMouseLeave } ) => {
    if(photos.length > 0) {
      return (
          <table className="mosaic">
            <tbody>
                <tr>
                    <Tile   url={photos[0].url} 
                            text={photos[0].owner}
                            link={photos[0].link}
                            ordinal='0'
                            onClick={(e) => onClick(e.value)}
                            onMouseEnter={() => onMouseEnter('0')}
                            onMouseLeave={() => onMouseLeave('0')}
                            isBeingHovered={hoverOverTile == 0}
                            isLocked={lockedTiles[0]}
                     />
                    <Tile   url={photos[1].url} 
                            text={photos[1].owner}
                            link={photos[1].link}
                            ordinal='1'
                            onClick={(e) => onClick(e.value)}
                            onMouseEnter={() => onMouseEnter('1')}
                            onMouseLeave={() => onMouseLeave('1')}
                            isBeingHovered={hoverOverTile == 1}
                            isLocked={lockedTiles[1]}
                     />
                    <Tile   url={photos[2].url} 
                            text={photos[2].owner}
                            link={photos[2].link}
                            ordinal='2'
                            onClick={(e) => onClick(e.value)}
                            onMouseEnter={() => onMouseEnter('2')}
                            onMouseLeave={() => onMouseLeave('2')}
                            isBeingHovered={hoverOverTile == 2}
                            isLocked={lockedTiles[2]}
                     />
                </tr>
                <tr>
                    <Tile   url={photos[3].url} 
                            text={photos[3].owner}
                            link={photos[3].link}
                            ordinal='3'
                            onClick={(e) => onClick(e.value)}
                            onMouseEnter={() => onMouseEnter('3')}
                            onMouseLeave={() => onMouseLeave('3')}
                            isBeingHovered={hoverOverTile == 3}
                            isLocked={lockedTiles[3]}
                     />
                    <Tile   url={photos[4].url} 
                            text={photos[4].owner}
                            link={photos[4].link}
                            ordinal='4'
                            onClick={(e) => onClick(e.value)}
                            onMouseEnter={() => onMouseEnter('4')}
                            onMouseLeave={() => onMouseLeave('4')}
                            isBeingHovered={hoverOverTile == 4}
                            isLocked={lockedTiles[4]}
                     />
                    <Tile   url={photos[5].url} 
                            text={photos[5].owner}
                            link={photos[5].link}
                            ordinal='5'
                            onMouseEnter={() => onMouseEnter('5')}
                            onMouseLeave={() => onMouseLeave('5')}
                            isBeingHovered={hoverOverTile == 5}
                            isLocked={lockedTiles[5]}
                     />
                </tr>
                <tr>
                    <Tile   url={photos[6].url} 
                            text={photos[6].owner}
                            link={photos[6].link}
                            ordinal='6'
                            onClick={(e) => onClick(e.value)}
                            onMouseEnter={() => onMouseEnter('6')}
                            onMouseLeave={() => onMouseLeave('6')}
                            isBeingHovered={hoverOverTile == 6}
                            isLocked={lockedTiles[6]}
                     />
                    <Tile   url={photos[7].url} 
                            text={photos[7].owner}
                            link={photos[7].link}
                            ordinal='7'
                            onClick={(e) => onClick(e.value)}
                            onMouseEnter={() => onMouseEnter('7')}
                            onMouseLeave={() => onMouseLeave('7')}
                            isBeingHovered={hoverOverTile == 7}
                            isLocked={lockedTiles[7]}
                     />
                    <Tile   url={photos[8].url} 
                            text={photos[8].owner}
                            link={photos[8].link}
                            ordinal='8'
                            onClick={(e) => onClick(e.value)}
                            onMouseEnter={() => onMouseEnter('8')}
                            onMouseLeave={() => onMouseLeave('8')}
                            isBeingHovered={hoverOverTile == 8}
                            isLocked={lockedTiles[8]}
                     />
                </tr>
            </tbody>
          </table>
      );
    }
    else {
        return (
          <table className="mosaic">
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
          </table>
        )
    };
};

export default Mosaic;

