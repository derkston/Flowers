import { useState } from 'react'

import { createNewDraftProduct } from '../../Firebase/Product'
import { useAuth } from '../../hooks/useAuth'
import type { IProduct } from '../../Types/types'
import { PreviewFormContent } from '../PreviewFormContent/PreviewFormContent'
import style from './CreateProduct.module.css'
export const CreateProduct = () => {
	const {user} = useAuth();
	const [product , setProduct] = useState<IProduct>()
	function handleCreateProduct(e){
			e.preventDefault();
			const formChildren = e.currentTarget.children;
			const formProduct : any = {
				UID : user.uid,
				author : user.displayName,
				date : Date.now(),
			};
			for(let i = 1 ; i < formChildren.length - 1 ; i++){
				const inputName : string = formChildren[i].children[1].name;
				const inputValue : string = formChildren[i].children[1].value;
				if(inputValue.length > 0) {
					formProduct[inputName] = inputValue
				}else {
					return alert('Ваши поля пустые , пожалуйста заполните их')
				}
			}
			setProduct(formProduct)
			createNewDraftProduct(formProduct)
		}
	return <div className={style.create__product}>
		<form onSubmit={e => handleCreateProduct(e)} className={style.create__form_product} >
				<h2>Создайте товар</h2>
				<div className={style.input__wrapper}>
						<label htmlFor="title">Укажите название товара</label>
						<input type="text" name='title' />
				</div>
				<div className={style.input__wrapper}>
						<label htmlFor="short__description">Укажите краткое описание товара</label>
						<textarea name='short__description' />
				</div>
				<div className={style.input__wrapper}>
						<label htmlFor="full__description">Укажите полное описание товара</label>
						<textarea name='full__description' />
				</div>
				<div className={style.input__wrapper}>
						<label htmlFor="quantity">Укажите кол-во товара</label>
						<input type="number" name='quantity' />
				</div>
				<div className={style.input__wrapper}>
						<label htmlFor="price">Укажите цену товара</label>
						<input type="number" name='price' />
				</div>
				<button type='submit'>Создать Товар</button>
			</form>
		<PreviewFormContent previewContent={product} />
	</div>
}
