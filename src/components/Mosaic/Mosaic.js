import React from 'react';
import Tile from './Tile/Tile';
import './Mosaic.css';

const Mosaic = ( { photos } ) => {

    if(photos.length > 0) {
      return (
          <table className="mosaic">
            <tbody>
                <tr>
                    <Tile url={photos[0].url} />
                    <Tile url={photos[1].url} />
                    <Tile url={photos[2].url} />
                </tr>
                <tr>
                    <Tile url={photos[3].url} />
                    <Tile url={photos[4].url} />
                    <Tile url={photos[5].url} />
                </tr>
                <tr>
                    <Tile url={photos[6].url} />
                    <Tile url={photos[7].url} />
                    <Tile url={photos[8].url} />
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

