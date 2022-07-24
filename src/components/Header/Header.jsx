import './Header.scss';

import { BsEmojiSmile, BsEmojiFrown } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-search">
        <input type="text" />
        <div className="app__header-search-icon">
          <AiOutlineSearch className="search-icon"/>
        </div>
      </div>

      <div className="app__header-actions">
        <div className="app__header-action like">
          <BsEmojiSmile className="action-icon"/>
        </div>

        <div className="app__header-action fav">
          <AiOutlineHeart className="action-icon"/>
        </div>

        <div className="app__header-action dislike">
          <BsEmojiFrown className="action-icon"/>
        </div>
      </div>
    </div>
  )
}

export default Header