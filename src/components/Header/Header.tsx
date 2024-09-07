import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <img src="../assets/images/logo/logo.svg" alt="logo-rimac" />
            <div className={styles.header_info}>
                <span>¡Compra por este medio!</span>
                <div>
                    <img src="../assets/icons/GlTelephoneSolid.svg" alt="phone" />
                    <span>(01) 411 6001</span>
                </div>
            </div>
        </header>
    );
};

export default Header;