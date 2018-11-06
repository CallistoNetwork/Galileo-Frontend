import React from 'react';

const HomeMainInfo = () => (
  <section className='HomeMainInfo container'>
    <div className='HomeMainInfo-lastblock square'>
      Last block
    </div>
    <div className='HomeMainInfo-hashrate square'>
      Average network hashrate
    </div>
    <div className='HomeMainInfo-difficulty square'>
      Difficulty
    </div>
    <div className='HomeMainInfo-transactions square'>
      Transactions per day
    </div>
  </section>
);

export default HomeMainInfo;
