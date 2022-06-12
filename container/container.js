import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Head from "next/head";

function Container(props) {
  return (
    <div>
      <Head>
        <title>Buscador de Perfiles- Proyecto Next.JS</title>
      </Head>
      <NavBar/>
      <div>
        {props.children}
      </div>
    </div>
  )
};

export default Container