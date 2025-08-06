import { useParams } from 'react-router'
import { FAKE__POSTS } from '../../api/FAKE_POSTS'
import type { IPost } from '../../Types/post.type'
import { Container } from '../Container/Container'
import style from './Post.module.css'
export const Post = () => {
	const {id}    = useParams()
	// Если .find дает undefined то  post == false
	const post : IPost | boolean =  FAKE__POSTS
	.find( (e : IPost) =>   e.id.toString() == id ) 
	||  false ;

	return post ? (
		 <section >
		<Container>
			<article className={style.post}>
					<img src={'../' + post.image} alt={post.title}  />
					<div className={style.post__text}>
							<h2>{post.title}</h2>
							<p className={style.short_description}>{post.short_description}</p>
							<p className={style.full_description}>{post.full_description}</p>
							<span>{post.date}</span>
					</div>
			</article>
		</Container>
	</section>
	) : <div>Пост не найден</div>
}
