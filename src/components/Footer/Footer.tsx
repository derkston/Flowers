
import { Container } from '../Container/Container'
import { Connect } from '../ui/Connect/Connect'
import { Logo } from '../ui/Logo/Logo'
import { NavBar } from '../ui/NavBar/NavBar'
import style from './Footer.module.css'
export const Footer = () => {
	return <footer>
		<Container>
			<div className={style.footer__wrapper}>
					<Logo/>
					<NavBar/>
					<Connect text={false}/>
			</div>
		</Container>
	</footer>
}
