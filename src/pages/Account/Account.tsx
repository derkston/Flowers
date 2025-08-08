import { signOut } from 'firebase/auth'
import { Container } from '../../components/Container/Container'
import { Loading } from '../../components/ui/Loading/Loading'
import { useAuth } from '../../hooks/useAuth'
import { auth } from '../../main'
import { UserPanel } from '../../services/AdminPanel/UserPanel/UserPanel'
import style from './Account.module.css'
export const Account = () => {

	const {user , loading } = useAuth();
  	const handleLogout = async () => {
			try {
				await signOut(auth);
				console.log('Пользователь успешно вышел из аккаунта!');
			} catch (error) {
				if (error instanceof Error) {
			 		alert('Ошибка при выходе:' +  error.message);
				}
			}
	}
	return <>
		{loading && <Loading/>}
		{!loading && user && 	<main className={style.account}>
					<section className={style.user__header}>
						<Container>
							<div className={style.user__wrapper}>
									<div className={style.user__info}>
										<h3 className={style.user__name}>{user.displayName}</h3>
										{user.photoURL &&
										<img 
										className={style.user__photo}
										src={user.photoURL}
										/>}
									</div>
									<button onClick={handleLogout}>Выйти</button>
							</div>
						</Container>
					</section>
				<UserPanel/>
			</main>
		}
		{!user && <h2 style={{textAlign : 'center' , margin : 'auto 0'}}>Пользователь не авторизован</h2>}
	</>
}
