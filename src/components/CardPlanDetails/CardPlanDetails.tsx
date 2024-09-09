import { useNavigate } from 'react-router-dom';
import { Plans } from '../../types/plans';
import { cutSecondText, cutText } from '../../utils/cutText';
import styles from './CardPlanDetails.module.scss';
import { useUser } from '../../context/userContext';

interface Props {
    plan: Plans
    urlImg: string
    input: boolean
}

const CardPlanDetails: React.FC<Props> = ({input, plan, urlImg}) => {
    const { name, description, price } = plan;
    const { setSelectedPlan } = useUser();
    const navigate = useNavigate();

    const handleSelectPlan = ()=>{
        let newPlan = plan;
        if(input) {
            newPlan = {...plan, price: plan.price - plan.price*5/100}
        }
        setSelectedPlan(newPlan);
        navigate('/resumen')
    }

    return (
        <div className={styles.card}>
            <div className={styles.card__header}>
                <aside>
                    <h3>{name}</h3>
                    <div>
                        <div>costo del plan</div>

                        <span>${price} al mes</span>
                    </div>
                </aside>
                <div>
                    <img src={urlImg} alt="icon" />
                </div>
            </div>
            <hr />
            <div className={styles.card__list}>                        
                <ul>
                    {
                        description.map((text,index)=>(
                            <li key={index}>
                                <span>{cutText(text)}</span> {cutSecondText(text)}
                            </li>
                        ))
                    }                    
                </ul>
                <button  
                    className={styles.card__button}
                    onClick={handleSelectPlan}
                >
                    Seleccionar Plan
                </button>
            </div>
        </div>
    );
};

export default CardPlanDetails;