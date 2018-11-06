import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import HomeMainInfo from '../components/Home/HomeMainInfo';

const Home = ({ match }) => {
  return (
    <Layout className='Home' match={match}>
      <Header />
      <HomeMainInfo />
    </Layout>
  );

}

export default hot(module)(Home);
