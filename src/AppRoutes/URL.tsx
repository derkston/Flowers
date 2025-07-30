import { GoogleSign } from '../GoogleSign'
import { Home } from '../pages/Home/Home'

export const PUBLIC_URL = [
	{
		path : '/',
		component : Home,
		element_name : 'Home',	
	},
	{
		path : '/googleSign',
		component : GoogleSign,
		element_name : 'GoogleSign',
	}
]