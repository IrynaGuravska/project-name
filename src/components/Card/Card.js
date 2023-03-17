import styles from "./Card.module.scss";
import { useDispatch } from "react-redux";
import { toggleCardFavorite, removeCard } from "../../redux/cardsRedux";
import clsx from "clsx";

const Card = (props) => {
    const dispatch = useDispatch();
    const toggle = () => {
        dispatch(toggleCardFavorite(props.id));
    };
    const remove = () => {
        dispatch(removeCard(props.id));
    };

    return (
        <li className={styles.card}>
            <div className={styles.row}>
                <div>{props.title}
                </div>
                <div>
                    <button onClick={toggle} className={clsx(styles.button, props.isFavorite && styles.active)}>
                    <span className="fa fa-star-o" />
                    </button>
                    <button onClick={remove} className={clsx(styles.remove_button)}>
                        <span className="fa fa-trash" />
                    </button>
                </div>
            </div>
        </li>
    );
};

export default Card;