import { Account } from '../pages/Account/Account'
import { Home } from '../pages/Home/Home'
import { Login } from '../pages/Login/Login'

export const PUBLIC_URL = [
	{
		path : '/',
		component : Home,
		element_name : 'Главная',	
	},
	{
		path : '/login',
		component : Login,
		element_name : 'Войти',
	},
	{
		path : '/account',
		component : Account,
		element_name : 'Кабинет'
	}
]
