import { Navigate, Route, Routes } from 'react-router'
import { Post } from '../../components/Post/Post'
import { Home } from '../../pages/Home/Home'
import type { IURL } from '../../Types/URL.type'
import { PUBLIC_URL } from './URL'


export const AppRoutes = () => {
	return <Routes>
		<Route path='/' index element={<Home/>}/>
		{PUBLIC_URL.map((e : IURL) => {
			return <Route path={e.path}  element={<e.component/>}/>
		})}

		<Route path='/posts/:id' element={<Post/>}/>
		
		<Route path='/*' element={<Navigate to='/'/>}/>
	</Routes>
}
