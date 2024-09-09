import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import styles from './Plans.module.scss';
import CardPlan from "../../components/CardPlan/CardPlan";
import CardPlanDetails from "../../components/CardPlanDetails/CardPlanDetails";
import usePlans from "../../hooks/usePlans";
import { useUser } from "../../context/userContext";
import { ChangeEvent, useState } from "react";
import ButtonBack from "../../components/ButtonBack/ButtonBack";

const Plans = () => {    
    const { user } = useUser();        
    const { plans } = usePlans();
    const [inputForMe, setInputForMe] = useState(false);
    const [inputForsomeone, setInputForsomeone] = useState(false);        

    const handleChangeInputForMe = (e: ChangeEvent<HTMLInputElement>)=>{
        setInputForMe(e.target.checked)        
        setInputForsomeone(false)
    }
    
    const handleChangeInputForsomeone = (e: ChangeEvent<HTMLInputElement>)=>{
        setInputForsomeone(e.target.checked)
        setInputForMe(false)        
    }

    const urls = [
        'src/assets/icons/IcHomeLight.svg',
        'src/assets/icons/IcHospitalLight.svg',
        'src/assets/icons/IcHomeLight.svg'
    ]

    return (
        user &&                 
        <div className={styles.plans}>
        <Breadcrumb prev/>
        <div className={styles.plans__content}>
            <ButtonBack url="/"/>
            <div className={styles.plans__main}>
                <aside>
                    <h2>
                        {user.name} ¿Para quién deseas cotizar?
                    </h2>
                    <p>Selecciona la opción que se ajuste más a tus necesidades.</p>                    
                </aside>
                <div className={styles.plans__options}>        
                    <CardPlan
                        handleChangeInput={handleChangeInputForMe}
                        idInput="for-me"
                        title="Para mí" 
                        description="Cotiza tu seguro de salud y agrega familiares si así lo deseas." 
                        image="src/assets/icons/IcProtectionLight.svg"
                        />                                
                    <CardPlan 
                        handleChangeInput={handleChangeInputForsomeone}
                        idInput="for-someone"
                        title="Para alguien más" 
                        description="Realiza una cotización para uno de tus familiares o cualquier persona." 
                        image="src/assets/icons/IcAddUserLight.svg"
                    />                                
                </div>
            </div>
            {
                (inputForMe || inputForsomeone) &&
                <div className={styles.plans__details}>
                    {
                        plans && plans.length > 0 &&
                            plans.map((plan, index) => (
                                <CardPlanDetails 
                                    key={index} 
                                    plan={plan}
                                    urlImg={urls[index]}
                                    input={inputForsomeone}
                                    isRecommend={index === 1}
                                />
                            ))
                    }                   
                </div>
            }
        </div >
    </div>                
    );
};

export default Plans;