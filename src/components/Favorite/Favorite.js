import styles from "./Favorite.module.scss";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { getFavoriteCard } from "../../redux/store";

const Favorite = () => {

   const cards = useSelector(getFavoriteCard);
   
   return (
      <div>
         <h1 className={styles.title}>Favorite</h1>
         <div className={styles.favoriteColumn}>
            <article className={styles.column}>
               <ul className={styles.cards}>
                  {cards.map((card) => (
                  <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} />))}
               </ul>
            </article>
         </div>
      </div>
   );
};
export default Favorite;