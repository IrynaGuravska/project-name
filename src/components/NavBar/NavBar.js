import styles from './NavBar.module.scss'
import React from 'react';
import Container from '../Container/Container.js';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
   return (
      <nav className={styles.navbar}>
         <Container>
            <div className={styles.wrapper}>
               <Link to='/' className={styles.icon}>
                  <span className='fa fa-tasks' />
               </Link>
               <ul className={styles.navlist}>
                  <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                     to="/">Home</NavLink></li>
                  <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} 
                     to="/favorite">Favorite</NavLink></li>
                  <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} 
                     to="/about">About</NavLink></li>
               </ul>
            </div>
         </Container>
      </nav>
      )
}

export default NavBar;