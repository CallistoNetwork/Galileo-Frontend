import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import HomeMainInfo from '../components/Home/HomeMainInfo';
import NetworkList from '../components/Home/NetworkList';

const Home = ({ match }) => {
  return (
    <Layout className='Home' match={match}>
      <Header />
      <HomeMainInfo />
      <NetworkList
        networks={[
          {
            id: 0,
            name: 'ETH',
            logo: '/image/networks/eth.svg',
            priceUSD: 199.82,
            priceBTC: 0.03133904,
            marketCapUSD: 20576353982,
            marketCapBTC: 3227057,
            volumeUSD: 1394358290,
            volumeBTC: 217682,
          },
          {
            id: 1,
            name: 'CLO',
            logo: '/image/networks/clo.svg',
            priceUSD: 199.82,
            priceBTC: 0.03133904,
            marketCapUSD: 20576353982,
            marketCapBTC: 3227057,
            volumeUSD: 1394358290,
            volumeBTC: 217682,
          },
          {
            id: 2,
            name: 'ETC',
            logo: '/image/networks/etc.svg',
            priceUSD: 199.82,
            priceBTC: 0.03133904,
            marketCapUSD: 20576353982,
            marketCapBTC: 3227057,
            volumeUSD: 1394358290,
            volumeBTC: 217682,
          },
        ]}
      />
    </Layout>
  );

}

export default hot(module)(Home);
