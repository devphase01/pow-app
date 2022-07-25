import './GridLayout.scss';

const GridLayout = ({ images }) => {

  console.log(images[0]);

  return (
    <div>
      <div className="app__grid">
        {images.length > 1
          ? images.map((image, index) => {
            let gridStyle = "";
            let gridPoints = [[0, 7, 10, 17], [3, 5, 13, 15]];

            if (gridPoints[0].includes(index)) gridStyle = "w-1 h-2";
            else if (gridPoints[1].includes(index)) gridStyle = "w-2 h-2";

            return (
              <div className={`app__grid-block ${gridStyle}`} key={image.image.id}>
                <img src={image.image.url} alt={image.image.id} />
                <div className="hover-block" />
                <span className="hover-block-breed">{image.name}</span>
              </div>
            )
          })
          : (
            <div className={`app__grid-block w-2 h-2`} key={images[0].image.id}>
              <img src={images[0].image.url} alt={images[0].image.id} />
              <div className="hover-block" />
              <span className="hover-block-breed">{images[0].name}</span>
            </div>
          )}
      </div>
    </div>
  )
}

export default GridLayout;