import React from 'react';
import Container from '../container/container';
import Users from '../components/users/users';
import fetch from 'isomorphic-fetch';

function Index({users}) {
  return (
    <Container>
      <Users users={users.data}/>
    </Container>
  )
};

Index.getInitialProps = async () => {
  const res = await fetch('https://reqres.in/api/users')
  const json = await res.json();
  return { users : json }
};

export default Index;