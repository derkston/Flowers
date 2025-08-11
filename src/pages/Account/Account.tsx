import { useState } from 'react'
import { Container } from '../../components/Container/Container'
import { Loading } from '../../components/ui/Loading/Loading'
import { UserNav } from '../../Components/ui/UserNav/UserNav'
import { handleLogout } from '../../Firebase/handleLogOut'
import { useAuth } from '../../hooks/useAuth'
import { AdminPanel } from '../../Services/AdminPanel/AdminPanel'
import { Basket } from '../../Services/Basket/Basket'
import style from './Account.module.css'
export const Account = () => {
	const [userContent , setUserContent] = useState<'basket' | 'adminPanel'>('adminPanel')
	const {user , loading } = useAuth();
  	
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
									<UserNav userContent={userContent} setUserContent={setUserContent}/>
									<button onClick={handleLogout}>Выйти</button>
							</div>
						</Container>
					</section>
					<section className={style.user__main}>
						<Container>
							<div className={style.user__main_wrapper}>
									{
										userContent == 'basket' ? <Basket/> :  
										userContent == 'adminPanel' ? <AdminPanel/> 
										: <span>Произошла ошибка , пожалуйста перезайдите</span>
									}
							</div>
						</Container>
					</section>
			</main>
		}
	</>
}
