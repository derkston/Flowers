import { signOut } from 'firebase/auth'
import { Container } from '../../components/Container/Container'
import { Loading } from '../../components/ui/Loading/Loading'
import { useAuth } from '../../hooks/useAuth'
import { auth } from '../../main'
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
	console.log(user)
	return <main className={style.account}>
		<section>
			{loading && <Loading/>}
			<Container>
				{!loading && <div className={style.account__user}>
						{user &&
							<>
								<div className={style.user}>
										<h2>{user.displayName}</h2>
										<p>{user.email}</p>
										{user.photoURL && <img className={style.user_photo} src={user.photoURL} />}
								</div>
								<button onClick={handleLogout}>Выйти</button>
							</>
						}
						{!auth.currentUser && <span>Пользователь не авторизован</span> }		
				</div>}
			</Container>
		</section>
	</main>
}
