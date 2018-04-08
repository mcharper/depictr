import React from 'react';
import Tile from './Tile/Tile';
import './Mosaic.css';

const Mosaic = ( { photos } ) => {

    if(photos.length > 0) {
      return (
          <table className="mosaic">
            <tbody>
                <tr>
                    <Tile   url={photos[0].url} 
                            text={photos[0].owner}
                            link={photos[0].link}
                     />
                    <Tile   url={photos[1].url} 
                            text={photos[1].owner}
                            link={photos[1].link}
                     />
                    <Tile   url={photos[2].url} 
                            text={photos[2].owner}
                            link={photos[2].link}
                     />
                </tr>
                <tr>
                    <Tile   url={photos[3].url} 
                            text={photos[3].owner}
                            link={photos[3].link}
                     />
                    <Tile   url={photos[4].url} 
                            text={photos[4].owner}
                            link={photos[4].link}
                     />
                    <Tile   url={photos[5].url} 
                            text={photos[5].owner}
                            link={photos[5].link}
                     />
                </tr>
                <tr>
                    <Tile   url={photos[6].url} 
                            text={photos[6].owner}
                            link={photos[6].link}
                     />
                    <Tile   url={photos[7].url} 
                            text={photos[7].owner}
                            link={photos[7].link}
                     />
                    <Tile   url={photos[8].url} 
                            text={photos[8].owner}
                            link={photos[8].link}
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

