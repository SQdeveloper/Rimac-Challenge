import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";

const Summary = () => {
    const { selectedPlan } = useUser();
    const navigate = useNavigate();

    // if(!selectedPlan) {
    //     navigate('/Planes')
    // }

    return (
        <div>
            {selectedPlan.name}            
            {selectedPlan.price}            
        </div>
    );
};

export default Summary;