import { Container } from '../../Container/Container'
import style from './Discover.module.css'
export const Discover = () => {
	return <section className={style.discover}>
		<Container>
			<div className={style.discover__wrapper}>
				<div className={style.discover__content}>
						<img src="img/discover1.jpg" />
						<div className={style.discover__text}>
								<h2>Откройте себя  с природой </h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nuncLorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nunc</p>
						</div>
				</div>
				<img src="img/discover2.jpg" />
			</div>
		</Container>
	</section>
}
