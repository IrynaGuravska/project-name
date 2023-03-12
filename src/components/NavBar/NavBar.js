import styles from './NavBar.module.scss'
import React from 'react';
import Container from '../Container/Container.js';

const NavBar = () => {
   return (
      <nav className={styles.navbar}>
         <Container>
            <div className={styles.wrapper}>
               <a href='/' className={styles.icon}>
                  <span className='fa fa-tasks' /></a>
                  <ul className={styles.navlist}>
                     <a href='/'>
                        <li>Home</li>
                     </a>
                     <a href='/favorite'>
                        <li>Favorite</li>
                     </a>
                     <a href='/about'>
                        <li>About</li>
                     </a>
                  </ul>
            </div>
         </Container>
      </nav>
      )
}

export default NavBar;