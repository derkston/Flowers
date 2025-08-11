import { signOut } from 'firebase/auth';
import { auth } from './firebase';


export const handleLogout = async () => {
			try {
				await signOut(auth);
				alert('Пользователь успешно вышел из аккаунта!');
			} catch (error) {
				if (error instanceof Error) {
			 		alert('Ошибка при выходе:' +  error.message);
				}
			}
	}