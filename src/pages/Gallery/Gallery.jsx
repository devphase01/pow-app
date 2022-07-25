import './Gallery.scss';
import { GridLayout, Header } from '../../components';
import { breedAPI } from '../../app/service/BreedService';

const Gallery = () => {
  const { data: images, isLoading, error } = breedAPI.useFetchBreedsQuery();

  return (
    <div className="app__wrapper">
      <Header />
      <div className="app__gallery">
        {isLoading && <div>Loading...</div>}
        {images && <GridLayout images={images.slice(0, 10)} />}
        {error && <div>{error}</div>}
      </div>
    </div>
  )
}
 
export default Gallery;