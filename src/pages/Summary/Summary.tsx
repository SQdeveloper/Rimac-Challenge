import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import styles from './Summary.module.scss';

const Summary = () => {
    const { selectedPlan, user } = useUser();
    const navigate = useNavigate();

    if(!selectedPlan) {
        navigate('/Planes')
    }

    return (
        <div className={styles.content}>
            <Breadcrumb url="/Planes" next/>
            <section className={styles.summary}>
                <ButtonBack url="/Planes"/>
                <h2>Resumen del seguro</h2>
                <div>
                    <aside className={styles.summary__header}>
                        <span>precios calculados para:</span>
                        <div>
                            <img src="src/assets/icons/gl_family-24x24.svg" alt="icon-person" />
                            <h3>{user.name} {user.lastName}</h3>
                        </div>
                    </aside>
                    <hr />
                    <aside>
                        <h3>Responsable de pago</h3>
                        <div>
                            <span>{user.documentType}:</span>
                            <span>{user.document}</span>
                        </div>
                        <span>Celular: {user.number}</span>
                    </aside>
                    <aside>
                        <h3>Plan elegido</h3>
                        <span>{selectedPlan.name}</span>
                        <span>Costo del Plan: {selectedPlan.price} al mes</span>
                    </aside>
                </div>
            </section>            
        </div>
    );
};

export default Summary;