import React from 'react';
import Header from '../src/components/Header';
import ImageList from '../src/components/ImageList';
import Footer from '../src/components/Footer';
import axios from 'axios';
import { BASE_URL } from '../utils/siteUrl';

export async function getServerSideProps({ params, req, res, query }) {
  const ratesApi = await axios.get( BASE_URL + '/api/rates');
  const imagesApi = await axios.get(BASE_URL + '/api/images');
  let rates = null;
  let images = null;
  if (ratesApi.status === 200) {
    rates = ratesApi.data;
  }
  if (imagesApi.status === 200) {
    images = imagesApi.data;
  }
  return {
    props: {
      rates,
      images,
    },
  };
}

const Home = ({ rates, images }) => {
  return (
    <div>
      <Header rates={rates} />

      <ImageList images={images} />

      <Footer />
    </div>
  );
};

export default Home;
