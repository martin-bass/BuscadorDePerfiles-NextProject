import React from 'react';
import { useState } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
import styles from './NavBar.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';

function NavBar({users}) {
  
  const router = useRouter();
  const [busqueda, setBusqueda] = useState('');

  const handleChange = e => {
    setBusqueda (e.target.value);
  };

  const buscarPerfil = (usuario) => {
    const resultadoBusqueda = users.filter(us => us.first_name.toLowerCase() === usuario.toString().toLowerCase() || us.last_name.toLowerCase() === usuario.toString().toLowerCase());

    if(resultadoBusqueda.length === 0) {
      return router.push('/notFound');
    } else {
      router.push('/users/[id]',`/users/${resultadoBusqueda[0].id}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid" >
        <div className={styles.BrandContainer}>
          <Link href="/"><a className= {styles.NavBarBrand} >Búsqueda de perfiles</a></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/"><a className="nav-link">Index</a></Link>
            </li>
              <Link href='/about'><a className="nav-link" aria-current="page" href="#">About</a></Link>
          </ul>
          <form className="d-flex">
            <input 
              className="form-control me-sm-2" 
              type="text" 
              placeholder="Search" 
              value={busqueda}
              onChange={handleChange}
            ></input>
            <button 
              className="btn btn-secondary my-2 my-sm-0" 
              type="submit" 
              onClick={(e)=>{
                e.preventDefault(),
                buscarPerfil(busqueda)
              }}
            >Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
};

export default NavBar;