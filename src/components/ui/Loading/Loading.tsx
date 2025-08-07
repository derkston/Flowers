import style from './Loading.module.css'
export const Loading = () => {
	return <div className={style.loading}>
			<h2>Загрузка</h2>
			<span className={style.loader}></span>
	</div>
}
