import { createContext, useState, useContext } from 'react';
import { fetchData as fetchUserService } from '../services/userService.js';
import { Plans } from '../types/plans.js';
import { User } from '../types/user.js';

interface UserContextType {
  user: User;
  updateUser: (data: Partial<User>) => void;
  fetchUserData: () => Promise<void>;
  selectedPlan: Plans;
  updatePlan: (data: Plans) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedPlan, setSelectedPlan] = useState<Plans>(()=>{
    const _plan = localStorage.getItem('__plan__');
    return _plan ? JSON.parse(_plan) :
    {
      name: '',
      age: 0,
      description: [''],
      price: 0
    }
  }
);

  const [user, setUser] = useState<User>(()=>{
    const _user = localStorage.getItem('__user__');
    return _user ? JSON.parse(_user) :
    {
      document: '',
      number: '',
      documentType: 'dni'
    }
  });  

  const updateUser = (data: Partial<User>) => {
    setUser(prev =>{
      const result = {...prev, ...data };
      localStorage.setItem('__user__', JSON.stringify(result));
      return result
    });    
  };
  const updatePlan = (data: Plans) => {
    localStorage.setItem('__plan__', JSON.stringify(data));
    setSelectedPlan(data)
  };

  const fetchUserData = async () => {
    try {      
      const data = await fetchUserService('user');
      updateUser({
        name: data.name,
        lastName: data.lastName,
        birthday: data.birthDay
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, updateUser, fetchUserData, selectedPlan, updatePlan }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
