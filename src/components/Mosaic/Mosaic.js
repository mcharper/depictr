import React from 'react';
import Tile from './Tile/Tile';
import './Mosaic.css';

const Mosaic = ( { photos, onClick } ) => {
    this.onClick = (event) => {
        onClick(event.value);
    }

    if(photos.length > 0) {
      return (
          <table className="mosaic">
            <tbody>
                <tr>
                    <Tile   url={photos[0].url} 
                            text={photos[0].owner}
                            link={photos[0].link}
                            ordinal='0'
                            onClick={onClick}
                     />
                    <Tile   url={photos[1].url} 
                            text={photos[1].owner}
                            link={photos[1].link}
                            ordinal='1'
                            onClick={onClick}
                     />
                    <Tile   url={photos[2].url} 
                            text={photos[2].owner}
                            link={photos[2].link}
                            ordinal='2'
                            onClick={onClick}
                     />
                </tr>
                <tr>
                    <Tile   url={photos[3].url} 
                            text={photos[3].owner}
                            link={photos[3].link}
                            ordinal='3'
                            onClick={onClick}
                     />
                    <Tile   url={photos[4].url} 
                            text={photos[4].owner}
                            link={photos[4].link}
                            ordinal='4'
                            onClick={onClick}
                     />
                    <Tile   url={photos[5].url} 
                            text={photos[5].owner}
                            link={photos[5].link}
                            ordinal='5'
                            onClick={onClick}
                     />
                </tr>
                <tr>
                    <Tile   url={photos[6].url} 
                            text={photos[6].owner}
                            link={photos[6].link}
                            ordinal='6'
                            onClick={onClick}
                     />
                    <Tile   url={photos[7].url} 
                            text={photos[7].owner}
                            link={photos[7].link}
                            ordinal='7'
                            onClick={onClick}
                     />
                    <Tile   url={photos[8].url} 
                            text={photos[8].owner}
                            link={photos[8].link}
                            ordinal='8'
                            onClick={onClick}
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

