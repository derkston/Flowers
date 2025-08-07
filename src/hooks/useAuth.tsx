import { useContext } from 'react'
import { AuthContext } from '../AppContext/context'


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    // Эта ошибка сработает, если ты попытаешься использовать useAuth
    // вне компонента, обернутого в <AuthProvider>
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};