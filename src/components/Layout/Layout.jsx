import { useLocation, useNavigate } from 'react-router-dom';

import Logo from '../../assets/Logo.png';
import VoteTable from '../../assets/vote-table.png';
import PetBreed from '../../assets/pet-breeds.png';
import SearchImage from '../../assets/images-search.png';

import './Layout.scss';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (page) => {
    
  }

  return (
    <div className="app__layout">
      <div className="app__layout__box">
        <div className="app__layout__box-logo" onClick={() => navigate("/") }>
          <img src={Logo} alt={Logo} />
        </div>

        <div className="app__layout__box-header">
          <h1 className="box-header-title">
            Hi intern!
          </h1>
          <p className="box-header-subtitle">
            Welcome to MI 2022 Front-end test
          </p>
        </div>

        <div className="app__layout__box-navigate">

          <h1 className="navigate-title">
            Lets start using The Cat API
          </h1>

          <div className="navigate__cards">
            <div className={`navigate__cards-card ${location.pathname === "/voting" ? "active" : ""}`}>
              <div className="card-image-box purple">
                <img src={VoteTable} alt={VoteTable} />
              </div>

              <div className="card-button" onClick={() => navigate("voting")}>
                <span>Voting</span>
              </div>
            </div>

            <div className={`navigate__cards-card ${location.pathname === "/breeds" ? "active" : ""}`}>
              <div className="card-image-box green">
                <img src={PetBreed} alt={PetBreed} />
              </div>

              <div className="card-button" onClick={(e) => navigate("breeds")}>
                <span>Breeds</span>
              </div>
            </div>

            <div className={`navigate__cards-card ${location.pathname === "/gallery" ? "active" : ""}`}>
              <div className="card-image-box orange">
                <img src={SearchImage} alt={SearchImage} />
              </div>

              <div className="card-button" onClick={(e) => navigate("gallery")}>
                <span>Gallery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app__layout-children">
        {children}
      </div>
    </div>
  )
}

export default Layout