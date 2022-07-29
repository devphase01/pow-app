import React from 'react';

import './GridGallery.scss';

const GridGallery = ({ images }) => {
  return (
    <div className="app__gallery-grid">
      {images.length > 0 
      ? images.map((image, index) => {
        let gridStyle = "";
        let gridPoints = [[0, 7, 10, 17], [3, 8, 13, 18]];

        if (gridPoints[0].includes(index)) gridStyle = "w-1 h-2";
        else if (gridPoints[1].includes(index)) gridStyle = "w-2 h-2";

        return (
          <div className={`app__gallery-grid-block ${gridStyle}`} key={image.id}>
            <img src={image.url} alt={image.id} />
          </div>
        )
      })
    : <div className="app__gallery-grid-error">No content.</div>}

    </div>
  )
}

export default GridGallery