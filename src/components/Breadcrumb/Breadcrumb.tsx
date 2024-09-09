import styles from './Breadcrumb.module.scss';

interface Props {
    next?: boolean;
    prev?: boolean;
    url: string;
}

const Breadcrumb: React.FC<Props> = ({url, next, prev}) => {
    return (
        <div className={styles.bread}>
            <div className={`${prev && styles['bread__content--active']}`}>
                <div className={styles.bread__number}>1</div>
                <span>Planes y coberturas</span>
                <img src="/icons/Progress.svg" alt="progress" />
            </div>
            <div className={`${next && styles['bread__content--active']}`}>
                <div className={`${styles['bread__number']} ${styles['bread__number--next']}`}>2</div>
                <span>Resumen</span>
            </div>
            <a href={url}>
                <img className={styles['bread__responsive--img']} src="/icons/atoms-button-circle-icons-web.svg" alt="chevron-left" />
            </a>
            <span className={styles['bread__responsive--span']}>paso 1 de 2</span>
            <div className={`${styles['bread__responsive--bar']} ${next && styles['bread__responsive--bar--active']}`}>
                <div></div>
            </div>
        </div>
    );
};

export default Breadcrumb;