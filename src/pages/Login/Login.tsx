import { ChangeEvent, useState } from 'react';
import styles from './Login.module.scss'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { useUser } from '../../context/userContext';
import { document } from '../../types/user';

const Login = () => {
    const [documentType, setDocumentType] = useState<document>('dni');
    const [document, setDocument] = useState('');
    const [number, setNumber] = useState('');
    const [errorDocument, setErrorDocument] = useState('');
    const [errorNumber, setErrorNumber] = useState('');
    const [errorPrivacity, setErrorPrivacity] = useState(false);
    const [errorComunication, setErrorComunication] = useState(false);
    const [privacityPolicy, setPrivacityPolicy] = useState(false);
    const [comunicationPolicy, setComunicationPolicy] = useState(false);
    const { login } = useAuth();
    const { updateUser, fetchUserData } = useUser();
    const navigate = useNavigate();

    const handleChangeDocumentType = (e:ChangeEvent<HTMLSelectElement>)=>{
        const value = e.target.value as document;        
        setDocumentType(value);
        setDocument('');
        setErrorDocument('');
    }

    const handleChangeDocument = (e: ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value;
        
        //Validations
        if(!/^\d*$/.test(value)) return;
        setDocument(value);
        if( documentType === 'dni' && value.length < 8) return setErrorDocument('*El DNI debe tener 8 dígitos.');
        if( documentType === 'ruc' && value.length < 11) return setErrorDocument('*El RUC debe tener 11 dígitos.');
        setErrorDocument('')

    }

    //Validation Celphone
    const handleChangeNumber = (e: ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value;
        
        if(!/^\d*$/.test(value)) return;        
        setNumber(value);

        if(value.length < 9) return setErrorNumber('*Ingresa un número valido.')
        setErrorNumber('')
    }

    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault();
        
        // Resetear los errores
        setErrorPrivacity(false);
        setErrorComunication(false);
        setErrorDocument('');
        setErrorNumber('');

        // Validaciones
        let hasErrors = false;

        if (!privacityPolicy) {
            setErrorPrivacity(true);
            hasErrors = true;
        }
        if (!comunicationPolicy) {
            setErrorComunication(true);
            hasErrors = true;
        }
        if (documentType === 'dni' && document.length < 8) {
            setErrorDocument('*El DNI debe tener 8 dígitos');
            hasErrors = true;
        }
        if (documentType === 'ruc' && document.length < 11) {
            setErrorDocument('*El RUC debe tener 11 dígitos');
            hasErrors = true;
        }
        if (number.length < 9) {
            setErrorNumber('*Ingresa un número valido.');
            hasErrors = true;
        }

        if (hasErrors) return;

        //Guardar datos del formulario
        updateUser({ document, number, documentType });
        fetchUserData();

        //Confirmo la autenticación
        login();
        
        navigate('/Planes');
    }

    //Policy
    const handleChangePrivacityPolicy = (e: ChangeEvent<HTMLInputElement>)=>{
        setPrivacityPolicy(e.target.checked);
    }

    const handleChangeComunicationPolicy = (e: ChangeEvent<HTMLInputElement>)=>{
        setComunicationPolicy(e.target.checked);
    }

    return (
        <div className={styles.content}>
            <div className={styles.login}>            
                <div className={styles.login__contentImage}>
                    <img src="src/assets/images/image 220.png" alt="banner" />
                </div>
                <form onSubmit={handleSubmit} className={styles.login__form}>
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
                                <select name="" id="" onChange={handleChangeDocumentType}>
                                    <option value="dni">DNI</option>
                                    <option value="ruc">RUC</option>
                                </select>
                            </div>
                            <input 
                                value={document} 
                                onChange={handleChangeDocument} 
                                type="text" 
                                placeholder='Nro. de documento' 
                                maxLength={documentType == 'dni' ? 8 : 11}
                            />                        
                        </div>
                        {
                            errorDocument &&
                                <span className={styles.login__error}>{errorDocument}</span>
                        }
                        <div>
                            <input 
                                type="text" 
                                placeholder='Celular' 
                                value={number}
                                onChange={handleChangeNumber}
                                maxLength={9}
                            />
                        </div>
                        {
                            errorNumber &&
                                <span className={styles.login__error}>{errorNumber}</span>
                        }
                    </div>
                    <div className={styles.login__contentChecks}>
                        <div>
                            <input onChange={handleChangePrivacityPolicy} id='privacity' type="checkbox"/>
                            <label 
                                htmlFor="privacity" 
                                className={`${errorPrivacity && `${styles['login__input--error']}`}`}
                            >
                                <div>
                                    <img src="src/assets/icons/check.svg" alt="check" />
                                </div>
                                <span>Acepto la Política de Privacidad</span>    
                            </label>                            
                        </div>                    
                        <div>
                            <input onChange={handleChangeComunicationPolicy} id='comunicacion' type="checkbox"/>
                            <label 
                                htmlFor="comunicacion"
                                className={`${errorComunication && `${styles['login__input--error']}`}`}
                            >
                                <div>
                                    <img src="src/assets/icons/check.svg" alt="check" />
                                </div>
                                <span>Acepto la Política Comunicaciones Comerciales</span>    
                            </label>                            
                        </div>                    
                        <a href="">Aplican Términos y Condiciones.</a>
                    </div>
                    <button type='submit' className={styles.login__buttonSend}>Cotiza aquí</button>                
                </form>
                <img className={`${styles['login__gradient--pink']} ${styles['login__gradient']}`} src="src/assets/images/gradient/blur-asset-pink.png" alt="gradient" />
                <img className={`${styles['login__gradient--green']} ${styles['login__gradient']}`} src="src/assets/images/gradient/blur-asset-green.png" alt="gradient" />
            </div>
        </div>
    );
};

export default Login;