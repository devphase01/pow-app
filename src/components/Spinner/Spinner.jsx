import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="app__spinner">
      <InfinitySpin color="gray" />
    </div>
  )
}

export default Spinner