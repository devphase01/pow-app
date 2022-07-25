import './Breeds.scss';
import { Header, GridLayout } from '../../components';
import { breedAPI } from '../../app/service/BreedService';

import { BsChevronLeft } from 'react-icons/bs';
import { useState } from 'react';
import Select from 'react-select';

import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai';

const Breeds = () => {
  const [limit, setLimit] = useState(10);
  const [reverse, setReverse] = useState(false);
  const [currentBreed, setCurrentBreed] = useState("");
  
  const { data: breedsData, isLoading, error } = breedAPI.useFetchBreedsQuery();
  const breeds = [{ value: "", label: "All breeds" }];

  const limitOption = [
    { value: 5, label: "Limit: 5" },
    { value: 10, label: "Limit: 10" },
    { value: 15, label: "Limit: 15" },
    { value: 20, label: "Limit: 20" },
  ]

  if (breedsData) breedsData.forEach(breed => breeds.push({ value: breed.id, label: breed.name }))

  return (
    <div className="app__wrapper">
      <Header />

      <div className="app__breeds">
        <div className="app__breeds__bar">
          <div className="app__breeds__bar--arrow">
            <BsChevronLeft color='#FF868E' fontSize={20} />
          </div>
          <div className="app__breeds__bar--title">
            <p>Breeds</p>
          </div>
          <div className="app__breeds__bar--breeds-filter">
            <Select
              options={!isLoading ? breeds : ""}
              defaultValue={[breeds[0]]}
              onChange={(e) => setCurrentBreed(e.value)}
            />
          </div>
          <div className="app__breeds__bar--breeds-limit">
            <Select
              defaultValue={[limitOption[1]]}
              options={limitOption}
              onChange={(e) => setLimit(e.value)}
              styles={{
                borderRadius: 20,
                outline: "none"
              }}
            />
          </div>
          <div className="app__breeds__bar--breeds-sort">
            <AiOutlineSortDescending color="#8C8C8C" fontSize={20} onClick={() => setReverse(false)}/>
          </div>
          <div className="app__breeds__bar--breeds-sort" onClick={() => setReverse(true)}>
            <AiOutlineSortAscending color="#8C8C8C" fontSize={20} />
          </div>
        </div>

        {isLoading && <div>Loading...</div>}
        {breedsData && !currentBreed.length
          ? (
            !reverse ? <GridLayout images={breedsData.slice(0, limit)} />
            : <GridLayout images={[...breedsData].reverse().slice(0, limit)} />
          )
          : ""}
        {breedsData && currentBreed.length ? <GridLayout images={breedsData.filter(breed => breed.id === currentBreed)} /> : ""}
        {error && <div>{error}</div>}
      </div>
    </div>
  )
}

export default Breeds