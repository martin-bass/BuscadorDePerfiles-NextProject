import React from 'react';
import {useRouter} from 'next/router';
import fetch from 'isomorphic-fetch';
import Container from '../../container/container';

function UsefProfile({user}) {

  const router = useRouter();
  
  const {id} = router.query
  console.log(user)

  return (
    <Container>
      <div>UsefProfile {user.id}</div>
    </Container>
  )
};

UsefProfile.getInitialProps = async (ctx) => {
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`)
  const json = await res.json()
  console.log(json.data)
  return { user : json.data }
}

export default UsefProfile;