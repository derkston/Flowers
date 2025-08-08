import { useState } from 'react'
import { NavLink } from 'react-router'
import { PUBLIC_URL } from '../../../Routes/AppRoutes/URL'
import style from './NavBar.module.css'
export const NavBar = () => {
	const [isBurger , setIsBurger] = useState(false);
	function handleBurger(){setIsBurger(!isBurger)}

	return <>
		<nav className={style.header_nav}>
		{PUBLIC_URL.map(e => {
			return <NavLink key={e.path} to={e.path}>{e.element_name}</NavLink>
		})}
		<NavLink to='/posts'>Все посты</NavLink>
	</nav> 
	{/* Tablet && Mobile nav */}
	<div   className={ style.burger_nav}>
	<button onClick={handleBurger}className={style.burger}>
		<span></span>
		<span></span>
		<span></span>
	</button>
	<nav style={!isBurger ? { display : 'none' } : {display : 'flex'}}>
		<button onClick={handleBurger} className={style.burger}>
			<span></span>
			<span></span>
			<span></span>
		</button>
		{PUBLIC_URL.map(e => {
			return <NavLink onClick={handleBurger} key={e.path} to={e.path}>{e.element_name}</NavLink>
		})}
		<NavLink onClick={handleBurger}  to='/posts'>Все посты</NavLink>
	</nav>
</div>
	</>
}

