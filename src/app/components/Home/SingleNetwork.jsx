import React from 'react';

const SingleNetwork = (props) => (
  <div className='SingleNetwork'>
    <figure className='SingleNetwork-figure'>
      <img src={props.logo} alt={props.name} />
    </figure>
  </div>
);

export default SingleNetwork;
