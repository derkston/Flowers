import type { User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '../main'
import { AuthContext } from './context'




export const AppContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false); 
    });
    return () => unsubscribe();
  }, []);


  return (
    <AuthContext value={{ user, loading }}>
      {children}
    </AuthContext>
  );
};

