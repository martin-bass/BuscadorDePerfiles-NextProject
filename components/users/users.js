import React from 'react';
import styles from './users.module.css';
import Router from 'next/router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';

function Users({users}) {
    
    return (
        <ul className={styles.listGroup}>
            {
                users.map(user => (
                <li className={styles.cardContainer}>
                    <div className="card mb-3" key={user.id}>
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
                        <div className="card-body" onClick={e => {Router.push('/users/[id]', `users/${user.id}`)}}>
                            <a href="#" className="card-link">More Info</a>
                        </div>
                        <div className="card-footer text-muted">
                            2 days ago
                        </div>
                    </div>
                </li>
                ))
            }
        </ul>
    )
};

export default Users;