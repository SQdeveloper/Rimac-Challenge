import styles from './CardPlanDetails.module.scss';

const CardPlanDetails = () => {
    return (
        <div className={styles.card}>
            <div className={styles.card__header}>
                <aside>
                    <h3>Plan en Casa</h3>
                    <div>
                        <div>costo del plan</div>
                        <span>$39 al mes</span>
                    </div>
                </aside>
                <div>
                    <img src="src/assets/icons/IcAddUserLight.svg" alt="icon" />
                </div>
            </div>
            <hr />
            <div className={styles.card__list}>                        
                <ul>
                    <li>
                        <span>Videoconsulta y</span> orientación telefónica  al 100% en medicina general + pediatría.
                    </li>
                    <li>
                        <span>Videoconsulta y</span> orientación telefónica  al 100% en medicina general + pediatría.
                    </li>
                    <li>
                        <span>Videoconsulta y</span> orientación telefónica  al 100% en medicina general + pediatría.
                    </li>
                </ul>
                <button className={styles.card__button}>Seleccionar Plan</button>
            </div>
        </div>
    );
};

export default CardPlanDetails;