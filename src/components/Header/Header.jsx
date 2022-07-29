import './Header.scss';

import { useLocation, useNavigate } from 'react-router-dom';

import { BsEmojiSmile, BsEmojiFrown } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="app__header">
      <div className="app__header-search">
        <input type="text" />
        <div className="app__header-search-icon">
          <AiOutlineSearch className="search-icon" />
        </div>
      </div>

      <div className="app__header-actions">
        <div
          className={`app__header-action like ${location.pathname === "/liked" ? "active" : ""}`}
          onClick={() => navigate("/liked")}
        >
          <BsEmojiSmile className="action-icon" />
        </div>

        <div
          className={`app__header-action fav ${location.pathname === "/favourite" ? "active" : ""}`}
          onClick={() => navigate("/favourite")}
        >
          <AiOutlineHeart className="action-icon" />
        </div>

        <div
          className={`app__header-action dislike ${location.pathname === "/disliked" ? "active" : ""}`}
          onClick={() => navigate("/disliked")}
        >
          <BsEmojiFrown className="action-icon" />
        </div>
      </div>
    </div>
  )
}

export default Header