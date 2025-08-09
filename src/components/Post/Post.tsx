import { NavLink, useParams } from 'react-router'
import { FAKE__POSTS } from '../../api/FAKE_POSTS'
import type { IPost } from '../../Types/post.type'
import style from './Post.module.css'
export const Post = ({post , fullPost = false , routePost = false }
	 : {post? : IPost , fullPost? : boolean , routePost : boolean}) => {
	const {id} = useParams()
	// Если .find дает undefined то  post == false
	const searchPost : IPost | boolean =
	  FAKE__POSTS.find( (e : IPost) =>   e.id.toString() == id ) 
	||  false ;

	 return 	routePost ? 
		searchPost ? <RoutePost searchPost={searchPost}/> 
		:  <div>Пост не найден</div>
		:  post ? (
					<article className={style.post}>
						<img src={'../' + post.image} alt={post.title}  />
						<div className={style.post__text}>
							<h2>{post.title}</h2>
							<p className={style.short_description}>{post.short_description}</p>
							{fullPost ? <p className={style.full_description}>{post.full_description}</p> : ''}
							<span>{post.date}</span>
							<span>{post.author}</span>
							<NavLink to={'/posts/' + post.id}>Подробнее</NavLink>
						</div>
					</article>
		) : <div>Пост не найден</div>
}

const RoutePost = ({searchPost } :
	 {searchPost : IPost }) => {
	return <article className={style.post}>
						<img src={'../' + searchPost.image} alt={searchPost.title}  />
						<div className={style.post__text}>
							<h2>{searchPost.title}</h2>
							<p className={style.short_description}>{searchPost.short_description}</p>
							 <p className={style.full_description}>{searchPost.full_description}</p>
							<span>{searchPost.date}</span>
						</div>
					</article>
}