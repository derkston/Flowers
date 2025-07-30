import { Navigate, Route, Routes } from 'react-router'
import { PUBLIC_URL } from './URL'





export const AppRoutes = () => {
	return <Routes>
		{PUBLIC_URL.map(e => {
			return <Route path={e.path} element={<e.component/>}/>
		})}
		<Route path='/*' element={<Navigate to='/'/>}/>
	</Routes>
}
