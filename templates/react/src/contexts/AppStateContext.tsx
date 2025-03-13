import { api } from '@/lib/axios';
import { createContext, useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  department: number;
};

type AppStateContextType = {
  user: User;
  setUser: (user: User) => void;
};

const defaultValue = {
  user: {} as User,
  setUser: () => { },
};

export const AppStateContext = createContext<AppStateContextType>(defaultValue);

const AppStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(defaultValue.user);

  const userSession = localStorage.getItem('session');

  useEffect(() => {
    if (!userSession) return;
    const userData = JSON.parse(userSession);
    setUser({
      id: Number(userData.user_id),
      name: userData.name,
      department: userData.current.department
        ? Number(userData.current.department.department_id)
        : undefined!,
    });
  }, [userSession]);

  useEffect(() => {
    const handleLogout = () => {
      api.defaults.headers.common['Authorization'] = null;
      sessionStorage.clear();
      setUser(defaultValue.user)
    };

    window.addEventListener('userLoggedOut', handleLogout);

    return () => {
      window.removeEventListener('userLoggedOut', handleLogout);
    };
  }, [])

  const value = {
    user,
    setUser,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
