
import { useState } from 'react'

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './main'

export const GoogleSign = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleGoogleSignIn = async () => {
    setErrorMessage(''); // Очищаем предыдущие ошибки

    // 1. Создаем экземпляр GoogleAuthProvider
    const provider = new GoogleAuthProvider();

    try {
      // 2. Вызываем signInWithPopup с нашим auth инстансом и провайдером
      const result = await signInWithPopup(auth, provider);

      // В 'result' содержится информация о вошедшем пользователе:
      const user = result.user; // Объект пользователя Firebase
      const credential = GoogleAuthProvider.credentialFromResult(result); // Учетные данные Google
      console.log(credential)
      // const accessToken = credential.accessToken; // Токен доступа Google (если нужен)

      console.log( user);
      alert(`Добро пожаловать, ${user.displayName || user.email}!`);
      // Здесь вы можете добавить логику для перенаправления пользователя
    } catch (error : any) {
      // Обработка ошибок входа через Google
      console.error('Ошибка входа через Google:', error.code, error.message);

      // Примеры обработки конкретных ошибок:
      if (error.code === 'auth/popup-closed-by-user') {
        setErrorMessage('Вход отменен пользователем.');
      } else if (error.code === 'auth/cancelled-popup-request') {
        setErrorMessage('Окно входа уже открыто.');
      } else {
        setErrorMessage(`Ошибка входа через Google: ${error.message}`);
      }
    }
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Войти через Google</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      
    </div>
  );
}


