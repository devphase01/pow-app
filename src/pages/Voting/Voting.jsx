import './Voting.scss';

import { Header } from '../../components';
import { useNavigate } from 'react-router-dom';

import CatImage from '../../assets/voting-cat.png';
import { BsChevronLeft } from 'react-icons/bs';

import { BsEmojiSmile, BsEmojiFrown } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';

const Voting = () => {
  const navigate = useNavigate();
  return (
    <div className="app__wrapper">
      <Header />

      <div className="app__voting">
        <div className="app__voting-navigate">
          <div className="app__voting-navigate-arrow" onClick={() => navigate(-1)}>
            <BsChevronLeft color='#FF868E' fontSize={20}/>
          </div>  

          <div className="app__voting-navigate-title">
            <p>Voting</p>
          </div>
        </div>

        {/* Voting image */}
        <div className="app__voting-image-box">
          <img src={CatImage} alt={CatImage} />
          <div className="app__voting-image-box-actions">
            <div className="image-action like" onClick={() => { }}>
              <BsEmojiSmile className="action-icon" />
            </div>

            <div className="image-action fav" onClick={() => { }}>
              <AiOutlineHeart className="action-icon" />
            </div>

            <div className="image-action dislike" onClick={() => { }}>
              <BsEmojiFrown className="action-icon" />
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

            <BsEmojiSmile className="message-icon like" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Voting;