import styles from './CardPlan.module.scss';

interface Props {
    title: string,
    description: string,
    image: string
    idInput: string
}

const CardPlan:React.FC<Props> = ({title, description, image, idInput}) => {
    return (
        <div className={styles.card}>
            <input name='options-plan' id={idInput} type="radio" />
            <label htmlFor={idInput}>
                <div>
                    <img src="src/assets/icons/check.svg" alt="check" />
                </div>
                <aside>
                    <img src={image} alt="icon" />
                    <h3>{ title }</h3>
                    <p>{ description }</p>
                </aside>
            </label>
        </div>    
    );
};

export default CardPlan;