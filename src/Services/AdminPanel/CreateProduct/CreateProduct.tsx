import { useState } from 'react'
import type { IProduct } from '../../../Types/types'
import { CreateForm } from '../../CreateForm/CreateForm'
import { PreviewFormContent } from '../../PreviewFormContent/PreviewFormContent'
import style from './CreateProduct.module.css'
export const CreateProduct = () => {
	const [product , setProduct] = useState<IProduct>()
	return <div className={style.create__product}>
		<CreateForm setProduct={setProduct} activeForm='CreateProduct'/>
		<PreviewFormContent previewContent={product} />
	</div>
}
