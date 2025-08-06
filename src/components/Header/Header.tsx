import { Container } from '../Container/Container'
import { Logo } from '../ui/Logo/Logo'
import { NavBar } from '../ui/NavBar/NavBar'
import style from './Header.module.css'
export const Header = () => {
	return <header>
		<Container>
				<div className={style.header__wrapper}>
					<Logo/>
					<NavBar/>
				</div>
		</Container>
	</header>
}
