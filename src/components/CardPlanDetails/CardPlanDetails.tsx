import { Plans } from '../../types/plans';
import styles from './CardPlanDetails.module.scss';

interface Props {
    plan: Plans
}

const cutText = (text: string)=>{    
    let firsttext = text.split(" ").slice(0, 3).join(" ");
    return firsttext;   
}
const cutSecondText = (text: string)=>{    
    let result = text.split(" ").slice(3, -1).join(" ");
    return result;   
}

const CardPlanDetails: React.FC<Props> = ({ plan}) => {
    const { name, description, price } = plan;

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
                    <img src="src/assets/icons/IcAddUserLight.svg" alt="icon" />
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
                <button className={styles.card__button}>Seleccionar Plan</button>
            </div>
        </div>
    );
};

export default CardPlanDetails;