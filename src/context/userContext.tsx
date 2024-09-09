import { createContext, useState, useContext, SetStateAction, Dispatch } from 'react';
import { fetchData as fetchUserService } from '../services/userService';
import { Plans } from '../types/plans';
import { User } from '../types/user';

interface UserContextType {
  user: User;
  updateUser: (data: Partial<User>) => void;
  fetchUserData: () => Promise<void>;
  selectedPlan: Plans;
  setSelectedPlan: Dispatch<SetStateAction<Plans>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedPlan, setSelectedPlan] = useState<Plans>({
    name: '',
    age: 0,
    description: [''],
    price: 0
  });

  const [user, setUser] = useState<User>({
    document: '',
    number: '',
    documentType: 'dni'
  });  

  const updateUser = (data: Partial<User>) => {
    setUser(prev => ({ ...prev, ...data }));    
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
    <UserContext.Provider value={{ user, updateUser, fetchUserData, selectedPlan, setSelectedPlan }}>
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
