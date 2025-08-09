import { useState } from 'react'
import type { TAdminContent } from '../../Types/types'
import style from './AdminPanel.module.css'
import { CreatePost } from './CreatePost/CreatePost'
import { CreateProduct } from './CreateProduct/CreateProduct'
import { UserPosts } from './UserPosts/UserPosts'
import { UserProducts } from './UserProducts/UserProducts'


export const AdminPanel = () => {
	const [adminContent , setAdminContent] = useState<TAdminContent>('UserPosts')
	return <div className={style.admin_panel}>
		<nav className={style.admin_nav}>
			<button 
				className={adminContent == 'UserPosts' ? style.active : undefined }
				onClick={() => setAdminContent('UserPosts')}>Все посты</button>
				<button 
					className={adminContent == 'UserProducts' ? style.active : undefined }
					onClick={() => setAdminContent('UserProducts')}>Все продукты</button>
				<button 
					className={adminContent == 'CreatePost' ? style.active : undefined }
					onClick={() => setAdminContent('CreatePost')}>Создать посты</button>
				<button 
					className={adminContent == 'CreateProduct' ? style.active : undefined  }
					onClick={() => {setAdminContent('CreateProduct')}}>Создать продукт</button>
				</nav>
				{adminContent == 'UserPosts' && <UserPosts/> }
				{adminContent == 'UserProducts' && <UserProducts/> }
				{adminContent == 'CreatePost' && <CreatePost/>}
				{adminContent == 'CreateProduct' && <CreateProduct/>}
	</div>
}
