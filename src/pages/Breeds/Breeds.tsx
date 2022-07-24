import { Header } from '../../components';
import GridLayout from '../../components/GridLayout/GridLayout';
import './Breeds.scss';

const Breeds = () => {
  return (
    <div className="app__wrapper">
      <Header />

      <GridLayout images={[]}/> {/* 10 images per component */}
    </div>
  )
}

export default Breeds