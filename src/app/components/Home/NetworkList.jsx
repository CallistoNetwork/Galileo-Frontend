import React from 'react';
import SingleNetwork from './SingleNetwork';

const NetworkList = ({ networks }) => (
  <section className='NetworkList container'>
    {networks.map(network => <SingleNetwork key={network.id} {...network} />)}
  </section>
);

export default NetworkList
