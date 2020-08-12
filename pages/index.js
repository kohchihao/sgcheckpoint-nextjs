import React from 'react';
import Header from '../src/components/Header';
import ImageList from '../src/components/ImageList';

import axios from 'axios';

export async function getServerSideProps({ params, req, res, query }) {
  const ratesApi = await axios.get('http://localhost:3000/api/rates');
  const imagesApi = await axios.get('http://localhost:3000/api/images');
  let rates = null;
  let images = null;
  if (ratesApi.status === 200) {
    rates = ratesApi.data;
  }
  if (imagesApi.status === 200) {
    images = imagesApi.data;
  }
  console.log(images);
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
    </div>
  );
};

export default Home;
