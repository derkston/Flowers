import { useState } from 'react'
import { UserPosts } from '../UserPosts/UserPosts'
import { UserProducts } from '../UserProducts/UserProducts'
import style from './UserPanel.module.css'
export const UserPanel = () => {
	const [content , setContent] = useState('products');
	return 	<section className={style.user__panel}>
			<div className={style.user__panel_wrapper}>
					<aside className={style.user__side}>
						<button onClick={() => setContent('products') }>Продукты</button>
						<button onClick={() => setContent('posts') }>Посты</button>
					</aside>
					<div className={style.user__panel_content}>
						{content == 'products' ? <UserProducts/>: null}
						{content == 'posts' ? <UserPosts/> : null}
					</div>
			</div>
	</section>
}
