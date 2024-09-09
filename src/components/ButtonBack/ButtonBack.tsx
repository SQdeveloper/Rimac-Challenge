import { Link } from "react-router-dom";
import styles from './ButtonBack.module.scss';

interface Props {
    url: string
}

const ButtonBack: React.FC<Props> = ({url}) => {
    return (
        <Link to={url} className={styles.button}>
            <img src="src/assets/icons/Icon-button.svg" alt="chevron-left" />
            <span>Volver</span>
        </Link>
    );
};

export default ButtonBack;