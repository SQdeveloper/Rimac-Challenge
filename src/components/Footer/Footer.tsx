import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <img src="src/assets/images/logo/Logo-white.svg" alt="logo-rimac" />
                <span>© 2023 RIMAC Seguros y Reaseguros.</span>
            </div>
        </footer>
    );
};

export default Footer;