import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle'

const Favorite = () => {
   return (
      <div className={styles.favorite}>
         <PageTitle>Favorite</PageTitle>
         <p className={styles.subtitle}>Lorem Ipsumd.</p>
      </div>
   );
};

export default Favorite;