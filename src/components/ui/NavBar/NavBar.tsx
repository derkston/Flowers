import { NavLink } from 'react-router'
import { PUBLIC_URL } from '../../../AppRoutes/URL'

export const NavBar = () => {
	return <nav>
		{PUBLIC_URL.map(e => {
			return <NavLink key={e.path} to={e.path}>{e.element_name}</NavLink>
		})}
	</nav>
}
