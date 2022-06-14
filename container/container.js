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
      <div style={{height:'80vh'}}>
        {props.children}
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <p class="text-secondary">Desarrollado por Martín Lopez - 2022</p>
      </div>
    </div>
  )
};

export default Container;