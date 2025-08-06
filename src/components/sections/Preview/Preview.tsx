import { Container } from '../../Container/Container'
import style from './Preview.module.css'
export const Preview = () => {
	return <section className={style.preview}>
		<Container>
			<div className={style.preview__wrapper}>
					<div className={style.preview__left}>
						<h1>Прекрасное приключение  ждет вас</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo neque, nobis aut est cumque iste et enim nisi consequuntur quaerat magnam quisquam nostrum in officia. Iste, consequatur? Tempore, nobis voluptatum.</p>
					</div>
					<div className={style.preview__right}>
						<img src="img/preview.jpg" />
					</div>
			</div>
		</Container>
	</section>
}
