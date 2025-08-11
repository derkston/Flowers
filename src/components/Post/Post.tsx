import { NavLink } from 'react-router'
import { useParamsPost } from '../../Hooks/useParamsPost'

import type { FC } from 'react'
import type { IPost } from '../../Types/types'
import style from './Post.module.css'
export const Post : FC<{post : IPost}> = ({post}) => {
	const {ParamsPost , PostParamsID} = useParamsPost();
		// Сперва проверяем на ID в URL , чтобы понять где мы (либо на странице AllPosts , либо на конкретном посте)
	 return PostParamsID == undefined ? (
					<article className={style.post}>
						<img src={'../' + post.image} alt={post.title}  />
						<div className={style.post__text}>
							<h2>{post.title}</h2>
							<p className={style.short_description}>
								{post.short_description}</p>
							<span>{post.date}</span>
							<span>{post.author}</span>
							 <NavLink to={'/posts/' + post.id}>Подробнее</NavLink>
						</div>
					</article>
		)
		// Проверяем есть такой пост по этому ID , если нету , то значит что мы на другом URL 
		: ParamsPost != undefined ?  ( 
			 	<article className={style.post}>
		 				{ParamsPost.image && <img src={'../' + ParamsPost.image} alt={ParamsPost.title}  />}
		 				<div className={style.post__text}>
		 					<h2>{ParamsPost.title}</h2>
		 					<p className={style.short_description}>
		 						{ParamsPost.short_description}</p>
		 					<p className={style.full_description}>{ParamsPost.full_description}</p> 
		 					<span>{ParamsPost.date}</span>
		 					<span>{ParamsPost.author}</span>
		 				</div>
		 		</article>
		) : <div>Пост не найден</div>
}


