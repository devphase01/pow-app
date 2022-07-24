import GirlPicture from '../../assets/home-girl-picture.png';

import './Home.scss';

const Home = () => {
  return (
    <div className="app__home">
      <div className="app__home-image-background" />

        <div className="app__home-image">
          <img src={GirlPicture} alt={GirlPicture} />
        </div>

    </div>
  )
}

export default Home