import './GridLayout.scss';

import { FC } from 'react';

interface GridProps {
  images: []
} 

const GridLayout: FC<GridProps> = ({ images }) => {
  return (
    <div>
      <div className="app__breeds">
        <div className="app__breed-block w-1 h-2"></div>
        <div className="app__breed-block w-1"></div>
        <div className="app__breed-block w-1"></div>
        <div className="app__breed-block w-2 h-2"></div>
        <div className="app__breed-block w-1"></div>

        <div className="app__breed-block w-2 h-2"></div>
        <div className="app__breed-block w-1"></div>
        <div className="app__breed-block h-2"></div>
        <div className="app__breed-block w-1"></div>
        <div className="app__breed-block w-1"></div>
      </div>
    </div>
  )
}

export default GridLayout