import { Link } from 'react-router-dom';
import styles from './Login.module.scss'

const Login = () => {
    return (
        <div className={styles.content}>
            <div className={styles.login}>            
                <div className={styles.login__contentImage}>
                    <img src="src/assets/images/image 220.png" alt="banner" />
                </div>
                <section className={styles.login__form}>
                    <div>
                        <div className={styles.login__info}>                    
                            <span className={styles.login__tagPromo}>
                                Seguro Salud Flexible
                            </span>
                            <div>
                                <h2 className={styles.login__title}>Creado para ti y tu familia</h2>
                                <p>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
                            </div>
                        </div>                
                        <div className={styles.login__infoResponsive}>
                            <div>
                                <div>
                                    <span className={styles.login__tagPromo}>
                                        Seguro Salud Flexible
                                    </span>
                                    <h2 className={styles.login__title}>Creado para ti y tu familia</h2>
                                </div>
                                <img src="src/assets/images/image 220.png" alt="banner" />
                            </div>
                            <hr />
                            <p>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
                        </div>
                    </div>
                    <div className={styles.login__contentInputs}>
                        <div>
                            <div className={styles.login__contentselect}>
                                <select name="" id="">
                                    <option value="">DNI</option>
                                </select>
                            </div>
                            <input type="text" placeholder='Nro. de documento' />                        
                        </div>
                        <div>
                            <input type="text" placeholder='Celular' />
                        </div>
                    </div>
                    <div className={styles.login__contentChecks}>
                        <div>
                            <input type="checkbox"/>
                            <span>Acepto la Política de Privacidad</span>
                        </div>                    
                        <div>
                            <input type="checkbox"/>
                            <span>Acepto la Política Comunicaciones Comerciales</span>
                        </div>                    
                        <a href="">Aplican Términos y Condiciones.</a>
                    </div>
                    <Link className={styles.login__buttonSend} to={'/dashboard'}>Cotiza aquí</Link>                
                </section>
                <img className={`${styles['login__gradient--pink']} ${styles['login__gradient']}`} src="src/assets/images/gradient/blur-asset-pink.png" alt="gradient" />
                <img className={`${styles['login__gradient--green']} ${styles['login__gradient']}`} src="src/assets/images/gradient/blur-asset-green.png" alt="gradient" />
            </div>
        </div>
    );
};

export default Login;