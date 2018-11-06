import React from 'react';
import Selector from './Selector';

const Header = () => (
  <header className='Header'>
    <div className='Header-content container'>
      <div className='Header-logo'>
        <figure className='Header-logo-figure'>
          <img src='/image/galileo-logo.svg' alt='Galileo Logo' />
        </figure>
      </div>
      <div className='Header-actions'>
        <div className='Header-actions-left'>
          <div className='Header-searchbar'>
            <input
              type='text'
              className='Header-searchbar-input'
              placeholder='Search by Address / Txhash / Block / Token'
            />
            <i className='fas fa-search Header-searchbar-icon' />
          </div>
          <div className='Header-actions-left-btns'>
            <a className='Header-actions-btn' href='#'>
              Real-time update
            </a>
            <Selector
              title='Blockchain'
              elements={['Blockchain 1', 'Blockchain 2', 'Blockchain 3']}
            />
            <Selector
              title='Language'
              elements={['English', 'German']}
            />
            <a href='#' className='btn btn-transparent-green'>
              Login
            </a>
          </div>
        </div>
        <div className='Header-actions-right'>
          profile pic here
        </div>
      </div>
    </div>
  </header>
);

export default Header;
