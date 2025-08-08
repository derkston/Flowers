
import { DragAndDrop } from '../../DragAndDrop/DragAndDrop'
import style from './UserProducts.module.css'
export const UserProducts = () => {
	return <div className={style.products}>
			<form className={style.create__products}>
				<h2>Здесь вы можете создать продукт</h2>
				<div className={style.drag_and_drop_wrapper}>
					<DragAndDrop/>
				</div>
				<div className={style.input__wrapper}>
					<label htmlFor="title">Название продукта</label>
					<input name='title' type="text" placeholder='Название продукта' />
				</div>
				<div className={style.input__wrapper}>
					<label htmlFor="short_description">Краткое описание продукта</label>
					<textarea
					 name='short_description'
					 placeholder='Краткое описание продукта' />
				</div>
				<div className={style.input__wrapper}>
					<label htmlFor="full_description">Описание продукта</label>
					<textarea
					 name='full_description'
					 placeholder='Описание продукта' />
				</div>
				<div className={style.input__wrapper}>
					<label htmlFor="quantity">Кол-во продукта</label>
					<input
					 name='quantity'
					 type="number" placeholder='Кол-во продукта' />
				</div>
				<div className={style.input__wrapper}>
					<label htmlFor="price">Цена продукта</label>
					<input
					 name='price'
					 type="number" placeholder='Цена продукта' />
				</div>
				<button>Создать продукт</button>
			</form>
			<div className={style.preview_post}>
						<h2>Здесь вы посмотреть созданный продукт</h2>
			</div>
	</div>
}
