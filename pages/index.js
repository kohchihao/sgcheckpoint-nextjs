import Head from 'next/head'
import React from 'react';
import Header from '../src/components/Header';
import axios from 'axios';

export async function getServerSideProps({ params, req, res, query }) {
  const ratesApi = await axios.get('http://localhost:3000/api/rates');
  let rates = null;
  if (ratesApi.status === 200) {
    rates = ratesApi.data;
  }
  return {
    props: {
      rates
    },
  };
}

const Home = ({ rates }) => {
  return (
    <div>
      <Header rates={rates}/>
    </div>
  )
}

export default Home;
