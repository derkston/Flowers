import { Account } from '../pages/Account/Account'
import { Home } from '../pages/Home/Home'

export const PUBLIC_URL = [
	{
		path : '/',
		component : Home,
		element_name : 'Главная',	
	},
	{
		path : '/account',
		component : Account,
		element_name : 'Аккаунт',
	},
]
