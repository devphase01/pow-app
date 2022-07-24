import './Voting.scss';

import { Header } from '../../components';
import ArrowLeft from '../../assets/arrow-left.png';
import CatImage from '../../assets/voting-cat.png';
import Like from '../../assets/like-white-30.png';
import Dislike from '../../assets/dislike-white-30.png';
import Favourite from '../../assets/fav-white-30.png';
import { useNavigate } from 'react-router-dom';

const Voting = () => {
  const navigate = useNavigate();
  return (
    <div className="app__wrapper">
      <Header />

      <div className="app__voting">
        <div className="app__voting-navigate">
          <div className="app__voting-navigate-arrow" onClick={() => navigate(-1)}>
            <img src={ArrowLeft} alt={ArrowLeft} />
          </div>

          <div className="app__voting-navigate-title">
            <p>Voting</p>
          </div>
        </div>

        {/* Voting image */}
        <div className="app__voting-image-box">
          <img src={CatImage} alt={CatImage} />
          <div className="app__voting-image-box-actions">
            <div className="image-action like" onClick={() => {}}>
              <img src={Like} alt={Like} />
            </div>

            <div className="image-action fav" onClick={() => {}}>
              <img src={Favourite} alt={Favourite} />
            </div>

            <div className="image-action dislike" onClick={() => {}}>
              <img src={Dislike} alt={Dislike} />
            </div>
          </div>
        </div>

        {/* Log */}
        <div className="app__voting-log">
          <div className="log-message">
            <div className="log-message-date">
              20:35
            </div>

            <div className="log-message-info">
              Image ID: fQSunHvl8 was added to Favourites
            </div>

            <div className="log-message-icon">
              <img src={Like} alt={Like} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Voting;