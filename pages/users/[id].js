import React from 'react';
import {useRouter} from 'next/router';
import fetch from 'isomorphic-fetch';
import Container from '../../container/container';
import styles from './[id].module.css';
import Link from "next/link";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';

function UsefProfile({user}) {

  const router = useRouter();
  const {id} = router.query
  
  return (
    <Container>
      <div className={styles.CardDetailContainer}>
        <div className="card w-25 m-5" key={user.id}>
          <div className={styles.titleContainer}>
              <h3 className="card-header h-100">{user.first_name} {user.last_name}</h3>
          </div>
          <div className="card-body">
              <h4 className="card-title">E-mail:</h4>
              <h6 className="card-subtitle text-muted">{user.email}</h6>
          </div>
          <div className={styles.imgContainer}>
              <img className={styles.userImg} src={user.avatar}></img>
          </div>
          <div className="card-footer text-muted">
            <Link href='/'><button type="button" className="btn btn-info">Back</button></Link>
          </div>
        </div>
      </div>   
    </Container>
  )
};

UsefProfile.getInitialProps = async (ctx) => {
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const json = await res.json();
  return { user : json.data }
};

export default UsefProfile;