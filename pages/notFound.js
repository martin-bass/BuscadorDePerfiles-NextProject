import React from 'react';
import Container from '../container/container';
import Link from "next/link";


function NotFound() {
  return (
    <Container>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div className="card bg-danger mb-3 " style={{width: '60%', margin: '20px'}}>
          <div className="card-header">Oooops...!</div>
          <div className="card-body">
            <h4 className="card-title">Perfil no encontrado</h4>
            <p className="card-text">El perfil que busca no se encuentra en este sitio. Por favor, vuelva a intentarlo.</p>
          </div>
          <div className='m-2'style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Link href='/'><button type="button" className="btn btn-dark">Back</button></Link>
          </div>
        </div>
      </div>
    </Container>
  )
};

export default NotFound;