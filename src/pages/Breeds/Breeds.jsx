import './Breeds.scss';
import { Header, GridLayout, Spinner, Select } from '../../components';
import { breedAPI } from '../../app/service/BreedService';

import { BsChevronLeft } from 'react-icons/bs';
import { useState, useEffect } from 'react';

import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Breeds = () => {
  const [limit, setLimit] = useState(10);
  const [reverse, setReverse] = useState(false);
  const [currentBreed, setCurrentBreed] = useState("");
  
  const { data: breedsData, isLoading, error } = breedAPI.useFetchBreedsQuery();
  const [breeds, setBreeds] = useState([{ value: "", label: "All breeds" }]);

  const limitOption = [
    { value: 5, label: "Limit: 5" },
    { value: 10, label: "Limit: 10" },
    { value: 15, label: "Limit: 15" },
    { value: 20, label: "Limit: 20" },
  ]

  useEffect(() => {
    if(breedsData) {
      const filtered = breedsData.map(breed => {
        return {
          value: breed.id,
          label: breed.name 
        }
      });

      filtered.unshift({ value: "", label: "All breeds" });
      setBreeds(filtered);
    }
  }, [breedsData]);

  const navigate = useNavigate();

  return (
    <div className="app__wrapper">
      <Header />

      <div className="app__breeds">
        <div className="app__breeds__bar">
          <div className="app__breeds__bar--arrow">
            <BsChevronLeft color='#FF868E' fontSize={20} onClick={() => navigate(-1)}/>
          </div>
          <div className="app__breeds__bar--title">
            <p>Breeds</p>
          </div>
          <div className="app__breeds__bar--breeds-filter">
            <Select
              options={!isLoading ? breeds : ""}
              defaultOption={breeds[0]}
              onChange={setCurrentBreed}
              background="#F8F8F7"
            />
          </div>
          <div className="app__breeds__bar--breeds-limit">
            <Select
              defaultOption={limitOption[1]}
              options={limitOption}
              onChange={setLimit}
              styles={{
                borderRadius: 20,
                outline: "none"
              }}
              background="#F8F8F7"
            />
          </div>
          <div className="app__breeds__bar--breeds-sort">
            <AiOutlineSortDescending color="#8C8C8C" fontSize={20} onClick={() => setReverse(false)}/>
          </div>
          <div className="app__breeds__bar--breeds-sort" onClick={() => setReverse(true)}>
            <AiOutlineSortAscending color="#8C8C8C" fontSize={20} />
          </div>
        </div>

        {isLoading && <div className="app__breeds-spinner"><Spinner /></div>}
        {breedsData && !currentBreed.length
          ? (
            !reverse ? <GridLayout images={breedsData.slice(0, limit)} />
            : <GridLayout images={[...breedsData].reverse().slice(0, limit)} />
          ) : ""}
        {breedsData && currentBreed.length ? <GridLayout images={breedsData.filter(breed => breed.id === currentBreed)} /> : ""}
        {error && <div>{error}</div>}
      </div>
    </div>
  )
}

export default Breeds