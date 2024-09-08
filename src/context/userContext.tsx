// UserContext.tsx
import { createContext, useState, useContext } from 'react';
import { fetchUserData as fetchUserService } from '../services/userService'; // Importar el servicio

interface User {
  document: string;
  number: string;
  name?: string;
  lastName?: string;
  birthday?: string;
}

interface UserContextType {
  user: User;
  updateUser: (data: Partial<User>) => void;
  fetchUserData: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({
    document: '',
    number: '',
  });

  const updateUser = (data: Partial<User>) => {
    setUser(prev => ({ ...prev, ...data }));    
  };

  const fetchUserData = async () => {
    try {
      const data = await fetchUserService();
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
    <UserContext.Provider value={{ user, updateUser, fetchUserData }}>
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
