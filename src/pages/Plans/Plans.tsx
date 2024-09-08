import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import styles from './Plans.module.scss';

const Plans = () => {    
    
    return (
        <div className={styles.plans}>
            <Breadcrumb prev/>
        </div>
    );
};

export default Plans;