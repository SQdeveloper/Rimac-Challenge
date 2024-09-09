import { useEffect, useState } from "react";
import { Plans } from "../types/plans";
import { fetchData } from "../services/userService";
import { useUser } from "../context/userContext";
import { calculateAge } from "../utils/calculateAge";

const usePlans = () => {
    const [plans, setPlans] = useState<Plans[]>();
    const { user, fetchUserData } = useUser();

    useEffect(()=>{
        fetchUserData()
    },[])
    
    const getData = async (age: number)=>{
        const data = await fetchData('plans');
        const filteredPlans = data.list.filter((plan: Plans) => plan.age > age);
        setPlans(filteredPlans);
    }
    
    useEffect(()=>{
        if (!user.birthday) return        
        const age = calculateAge(user.birthday);
        getData(age);        
    }, [user])

    return { plans };
};

export default usePlans;