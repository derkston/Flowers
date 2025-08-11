import type { FC } from 'react'
import { Product } from '../../Components/Product/Product'
import type { IPost, IProduct } from '../../Types/types'
import { Post } from '../../components/Post/Post'

export const PreviewFormContent : FC<{previewContent? : IPost | IProduct }> = ({previewContent}) => {
	if ( previewContent == undefined){
		return <h2>Вы ничего не создали</h2>
	}else {
		if('price' in previewContent){
			return <Product product={previewContent}/>
		}else{
			return <Post  post={previewContent}/>
		}
	}
}
