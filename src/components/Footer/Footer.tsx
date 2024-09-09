import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <img className={`${styles['footer__logo']}`} src="src/assets/images/logo/Logo-white.svg" alt="logo-rimac" />
                <img className={`${styles['footer__logo--responsive']}`} src="src/assets/images/logo/Logo-responsive.svg" alt="logo-rimac" />                
                <hr></hr>
                <span>© 2023 RIMAC Seguros y Reaseguros.</span>
            </div>
        </footer>
    );
};

export default Footer;