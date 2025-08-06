import { GitHub } from '../GitHub/GitHub'
import { Telegram } from '../Telegram/Telegram'
import style from './Connect.module.css'
export const Connect = ({text = true}) => {
	return <div className={style.connect}>
		<h3>Контакты</h3>
			<div className={style.connect__list}>
				<GitHub text={text}/>
				<Telegram text={text}/>
			</div>
	</div>
}
