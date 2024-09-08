import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import styles from './Plans.module.scss';
import CardPlan from "../../components/CardPlan/CardPlan";
import CardPlanDetails from "../../components/CardPlanDetails/CardPlanDetails";

const Plans = () => {    
    
    return (
        <div className={styles.plans}>
            <Breadcrumb prev/>
            <div className={styles.plans__content}>
                <Link to={'/'} className={styles.plans__back}>
                    <img src="src/assets/icons/Icon-button.svg" alt="chevron-left" />
                    <span>Volver</span>
                </Link>
                <div className={styles.plans__main}>
                    <aside>
                        <h2>
                            Rocío ¿Para quién deseas cotizar?
                        </h2>
                        <p>Selecciona la opción que se ajuste más a tus necesidades.</p>                    
                    </aside>
                    <div className={styles.plans__options}>        
                        <CardPlan 
                            idInput="for-me"
                            title="Para mí" 
                            description="Cotiza tu seguro de salud y agrega familiares si así lo deseas." 
                            image="src/assets/icons/IcProtectionLight.svg"
                        />                                
                        <CardPlan 
                            idInput="for-someone"
                            title="Para alguien más" 
                            description="Realiza una cotización para uno de tus familiares o cualquier persona." 
                            image="src/assets/icons/IcAddUserLight.svg"
                        />                                
                    </div>
                </div>
            </div >
            <div className={styles.plans__details}>
                <CardPlanDetails/>
                <CardPlanDetails/>
                <CardPlanDetails/>
            </div>
        </div>
    );
};

export default Plans;