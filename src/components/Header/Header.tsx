import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <img src="images/logo/Logo.svg" alt="logo-rimac" />
            <div className={styles.header__info}>
                <span>¡Compra por este medio!</span>
                <div>
                    <img src="icons/GlTelephoneSolid.svg" alt="phone" />
                    <span>(01) 411 6001</span>
                </div>
            </div>
        </header>
    );
};

export default Header;