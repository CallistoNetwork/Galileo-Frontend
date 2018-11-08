import React from 'react';

const HomeMainInfo = () => (
  <section className='HomeMainInfo container'>
    <div className='HomeMainInfo-lastblock square'>
      <h3 className='HomeMainInfo-title'>Last block</h3>
      <div className='HomeMainInfo-details'>
        <figure className='HomeMainInfo-details-figure'>
          <img src='/image/icons/sandclock.svg' alt='Last block' />
        </figure>
        <span className='HomeMainInfo-details-text'>
          13 s ago
        </span>
      </div>
    </div>
    <div className='HomeMainInfo-hashrate square'>
      <h3 className='HomeMainInfo-title'>AVG Network hashrate</h3>
      <div className='HomeMainInfo-details'>
        <figure className='HomeMainInfo-details-figure'>
          <img src='/image/icons/fire.svg' alt='AVG Network hashrate' />
        </figure>
        <span className='HomeMainInfo-details-text'>
          0 KH/s
        </span>
      </div>
    </div>
    <div className='HomeMainInfo-difficulty square'>
      <h3 className='HomeMainInfo-title'>Difficulty</h3>
      <div className='HomeMainInfo-details'>
        <figure className='HomeMainInfo-details-figure'>
          <img src='/image/icons/puzzle.svg' alt='Difficulty' />
        </figure>
        <span className='HomeMainInfo-details-text'>
          0.00 H
        </span>
      </div>
    </div>
    <div className='HomeMainInfo-transactions square'>
      <h3 className='HomeMainInfo-title'>Transactions per day</h3>
    </div>
  </section>
);

export default HomeMainInfo;
