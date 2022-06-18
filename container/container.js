import React from 'react';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Head from "next/head";

//Axios
import axios from 'axios';

function Container(props) {
  const [users, setUsers] = useState();

  async function getUser() {
    try {
      const response = await axios.get('https://reqres.in/api/users');
      setUsers(response.data.data); 
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Head>
        <title>Buscador de Perfiles- Proyecto Next.JS</title>
      </Head>
      <NavBar users={users}/>
      <div style={{height:'80vh'}}>
        {props.children}
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <p className="text-secondary">Desarrollado por Martín Lopez - 2022</p>
      </div>
    </div>
  )
};

export default Container;