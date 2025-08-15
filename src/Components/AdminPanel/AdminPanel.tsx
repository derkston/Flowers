import { useState } from 'react'
import type { TAdminContent } from '../../Types/types'
import { UserPosts } from '../UserPosts/UserPosts'
import style from './AdminPanel.module.css'

import { CreatePost } from '../CreatePost/CreatePost'
import { CreateProduct } from '../CreateProduct/CreateProduct'
import { UserProducts } from '../UserProducts/UserProducts'


export const AdminPanel = () => {
	const [adminContent , setAdminContent] = useState<TAdminContent>('UserPosts')
	return <div className={style.admin_panel}>
		<nav className={style.admin_nav}>
			<button 
				className={adminContent == 'UserPosts' ? style.active : undefined }
				onClick={() => setAdminContent('UserPosts')}>Все статьи</button>
				<button 
					className={adminContent == 'UserProducts' ? style.active : undefined }
					onClick={() => setAdminContent('UserProducts')}>Все товары</button>
				<button 
					className={adminContent == 'CreatePost' ? style.active : undefined }
					onClick={() => setAdminContent('CreatePost')}>Создать статью</button>
				<button 
					className={adminContent == 'CreateProduct' ? style.active : undefined  }
					onClick={() => {setAdminContent('CreateProduct')}}>Создать товар</button>
				</nav>
				{adminContent == 'UserPosts' && <UserPosts/> }
				{adminContent == 'UserProducts' && <UserProducts/> }
				{adminContent == 'CreatePost' && <CreatePost/>}
				{adminContent == 'CreateProduct' && <CreateProduct/>}
	</div>
}
