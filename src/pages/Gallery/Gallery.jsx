import './Gallery.scss';
import { GridGallery, Spinner, Select } from '../../components';
import { breedAPI } from '../../app/service/BreedService';
import { BsChevronLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { BiUpload } from 'react-icons/bi';
import { useEffect, useRef, useState } from 'react';
import { MdSync } from 'react-icons/md';

import { orderOptions, typeOptions, limitOptions } from '../../data/options';
import { useSelector } from 'react-redux';

const Gallery = () => {
  const [order, setOrder] = useState("RAND");
  const [type, setType] = useState("jpg");
  const [breedId, setBreedId] = useState("");
  const [limit, setLimit] = useState(10);
  const rotateDeg = useRef(180);

  const [breedOptions, setBreedOptions] = useState({value: "", label: "None"});

  const { data: images, isLoading, error, refetch } = breedAPI.useFetchMediaQuery({ limit, order, type, breed_id: breedId });
  const { breedsItems: breeds } = useSelector(state => state.breeds);

  useEffect(() => {
    if (breeds) {
      const filtered = breeds.map(breed => {
        return {
          value: breed.id,
          label: breed.name
        }
      });

      filtered.unshift({ value: "", label: "None" });
      setBreedOptions(filtered);
    }
  }, [breeds]);

  const handleUpdate = () => {
    const update = document.querySelector(".filter-box--update-icon");
    update.style.transform = `rotate(${rotateDeg.current}deg)`;
    rotateDeg.current += 180;
    
    refetch();
  }

  const navigate = useNavigate();

  return (
    <div className="app__wrapper">
      <div className="app__gallery">
        <div className="app__gallery--bar">
          <div className="app__gallery--bar-nav">
            <div className="app__gallery__bar--arrow">
              <BsChevronLeft color='#FF868E' fontSize={20} onClick={() => navigate(-1)} />
            </div>
            <div className="app__gallery__bar--title">
              <p>Gallery</p>
            </div>
          </div>

          <div className="app__gallery--bar-upload">
            <BiUpload className="gallery-upload-btn" />
            <span>Upload</span>
          </div>
        </div>

        <div className="app__gallery--filter-box">
          <div className="filter-box--order">
            <Select
              label="order"
              defaultOption={{ value: "", label: "Random" }}
              options={orderOptions}
              onChange={setOrder}
            />
          </div>
          <div className="filter-box--type">
            <Select
              label="type"
              defaultOption={{ value: "static", label: "Static" }}
              options={typeOptions}
              onChange={setType}
            />
          </div>
          <div className="filter-box--breed">
            <Select
              label="breed"
              defaultOption={{ value: "", label: "None" }}
              options={breeds ? breedOptions : [breedOptions[0]]}
              onChange={setBreedId}
            />
          </div>
          <div className="filter-box--limit">
            <Select
              label="limit"
              defaultOption={{ value: 10, label: "10 items per page" }}
              options={limitOptions}
              onChange={setLimit}
            />
            <div className="filter-box--update" onClick={handleUpdate}>
              <MdSync className="filter-box--update-icon" />
            </div>
          </div>
        </div>

        {isLoading && <div className="app__gallery-spinner"><Spinner /></div>}
        {images && <GridGallery images={images} />}
        {error && <div>{error}</div>}
      </div>
    </div>
  )
}

export default Gallery;