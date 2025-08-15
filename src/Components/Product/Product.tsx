import { useState } from 'react'
import type { IProduct } from '../../Types/types'
import style from './Product.module.css'

export const Product = ({product} : {product : IProduct | null} ) => {
	const [image ,setImage] = useState<string  | null>();
	if(product ){
			if (product.image instanceof File) {
				const reader = new FileReader()
				reader.readAsDataURL(product.image)
				reader.onload = () => {
					setImage(reader.result?.toString())
				}
				
			}
	}
	return product ? <div className={style.product}>
			<h2>{product.title}</h2>
			{image && <img src={image}/>}
			<p> Краткое описание продукта : <br />{product.short_description}</p>
			<p> Описание продукта : <br />{product.full_description}</p>
			<span> Кол-во продукта : <br />{product.quantity}</span>
			<span> Цена продукта : <br />{product.price}Руб</span>
			<span> Автор продукта : <br />{product.author}</span>
			<span> ID продукта : <br />{product.id}</span>
	</div> 
	: <div>Вы еще не создали продукт</div>
}
