import React from 'react';
import Container from '../container/container';
import Link from "next/link";


function About() {
  return (
    <Container>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div className="card bg-light mb-3 " style={{width: '60%', margin: '20px'}}>
          <div className="card-header">About</div>
          <div className="card-body">
            <h4 className="card-title">About</h4>
            <p className="card-text">Ejemplo de buscador de perfiles, desarrollado con React.JS, Next.JS y con llamado a API externa.</p>
          </div>
          <div className='m-2'style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Link href='/'><button type="button" className="btn btn-info">Back</button></Link>
          </div>
        </div>
      </div>
    </Container>
  )
};

export default About;