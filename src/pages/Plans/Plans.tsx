import { useUser } from "../../context/userContext";

const Plans = () => {
    const { user } = useUser();
    
    return (
        <div>
            <h1>Plans</h1>            
            <h1>Plans</h1>            
            <h1>Plans</h1>            
            <h1>Plans</h1>            
            <span>{user?.document}</span>
            <span>{user?.name}</span>
        </div>
    );
};

export default Plans;