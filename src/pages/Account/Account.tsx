import { useState } from 'react'
import { AdminPanel } from '../../Components/AdminPanel/AdminPanel'
import { Basket } from '../../Components/Basket/Basket'
import { Loading } from '../../components/ui/Loading/Loading'
import { UserNav } from '../../Components/ui/UserNav/UserNav'
import { handleLogout } from '../../Firebase/handleLogOut'
import { useAuth } from '../../hooks/useAuth'
import style from './Account.module.css'
export const Account = () => {
	const [userContent , setUserContent] = useState<'basket' | 'adminPanel'>('adminPanel')
	const {user , loading } = useAuth();
  	
	return <>
		{loading && <Loading/>}
		{!loading && user && 	<main className={style.account}>
					<section className={style.user__header}>
							<div className={style.user__wrapper}>
									<UserNav userContent={userContent} setUserContent={setUserContent}/>
									<div className={style.user__info}>
										<h3 className={style.user__name}>{user.displayName}</h3>
										{user.photoURL &&
										<img 
										className={style.user__photo}
										src={user.photoURL}
										/>}
										<button onClick={handleLogout}>Выйти</button>
									</div>
							</div>
					</section>
					<section className={style.user__main}>
							<div className={style.user__main_wrapper}>
									{
										userContent == 'basket' ? <Basket/> :  
										userContent == 'adminPanel' ? <AdminPanel/> 
										: <span>Произошла ошибка , пожалуйста перезайдите</span>
									}
							</div>
					</section>
			</main>
		}
	</>
}
