import style from './UserNav.module.css'
interface IPropsUserNav {
	userContent : "basket" | "adminPanel" ,
	setUserContent : 
	 React.Dispatch<React.SetStateAction<"basket" | "adminPanel">>,
}
export const UserNav = ({setUserContent , userContent} : IPropsUserNav  ) => {
	return <nav className={style.user_nav}>
			<button
			 className={userContent == 'basket' ? style.active : ''}
			  onClick={() => setUserContent('basket')}>Корзина</button>
			<button
			 className={userContent == 'adminPanel' ? style.active : ''}
			  onClick={() => setUserContent('adminPanel')}>Админ панель</button>
		</nav>
}
