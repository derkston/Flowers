import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../main'

export const handleForm = async (
	email : string,
	password : string ,
	setLoading : (value: React.SetStateAction<boolean>) => void) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
		setLoading(false)
    alert('Пользователь зарегистрирован:' + user.email );
  } catch (error) {
		if (error instanceof Error) {
			 alert('Ошибка регистрации , возможно такой пользователь уже зарегистрирован');
		}
  }
} 