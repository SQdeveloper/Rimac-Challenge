import { useNavigate } from 'react-router-dom';
import { Plans } from '../../types/plans';
import { cutSecondText, cutText } from '../../utils/cutText';
import styles from './CardPlanDetails.module.scss';
import { useUser } from '../../context/userContext';

interface Props {
    plan: Plans
    urlImg: string
    input: boolean
    isRecommend?: boolean
}

const CardPlanDetails: React.FC<Props> = ({ isRecommend, input, plan, urlImg}) => {
    const { name, description, price } = plan;
    const descPrice = price - price*5/100;
    const { updatePlan } = useUser();
    const navigate = useNavigate();

    const handleSelectPlan = ()=>{
        let newPlan = plan;

        if(input) newPlan = {...plan, price: descPrice}        

        updatePlan(newPlan);
        navigate('/resumen')
    }

    return (
        <div className={styles.card}>
            <div className={styles.card__hero}>                
                <span className={`${styles.card__recommend} ${!isRecommend && `${styles['card__recommend--hidden']}`}`}>Plan recomendado</span>                                                                
                <div className={styles.card__header}>
                    <aside>
                        <h3>{name}</h3>
                        <div>
                            <div>costo del plan</div>
                            {
                                input && <span className={styles.desc}>${price} antes</span>
                            }
                            <span>${input ? descPrice : price} al mes</span>
                        </div>
                    </aside>
                    <div>
                        <img src={urlImg} alt="icon" />
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.card__list}>                        
                <ul>
                    {
                        description.map((text,index)=>(
                            <li key={index}>
                                • 
                                <div>
                                    <span>{cutText(text)}</span> {cutSecondText(text)}
                                </div>
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