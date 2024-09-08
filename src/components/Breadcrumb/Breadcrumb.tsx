import styles from './Breadcrumb.module.scss';

interface Props {
    next?: boolean;
    prev?: boolean;
}

const Breadcrumb: React.FC<Props> = ({next, prev}) => {
    return (
        <div className={styles.bread}>
            <div className={`${prev && styles['bread__content--active']}`}>
                <div className={styles.bread__number}>1</div>
                <span>Planes y coberturas</span>
                <img src="src/assets/icons/Progress.svg" alt="progress" />
            </div>
            <div className={`${next && styles['bread__content--active']}`}>
                <div className={`${styles['bread__number']} ${styles['bread__number--next']}`}>2</div>
                <span>Resumen</span>
            </div>
        </div>
    );
};

export default Breadcrumb;