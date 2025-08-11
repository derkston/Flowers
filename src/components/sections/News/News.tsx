import { Link, NavLink } from 'react-router'
import { useAllPost } from '../../../Hooks/useAllPost'
import { Container } from '../../Container/Container'
import { Loading } from '../../ui/Loading/Loading'
import style from './News.module.css'
export const News = () => {
	const {posts , loading , error} = useAllPost();
	if(loading){
		return <Loading/>
	}
	if(error){
		return <div>Произошла ошибка </div>
	}
	return <section>
		<Container>
			<div className={style.news__wrapper}>
					<div className={style.news__title}>
						<h2>Новости & обновления</h2>
						<Link to='/posts'>Все посты</Link>
					</div>
					<div className={style.news__posts}>
							{posts.slice(0 , 4).map(post => {
								return (
									<article className={style.news_post} key={post.id}>
										{post.image && <img src={post.image} />}
										<div className={style.news_post__text}>
											<h4>{post.title}</h4>
											<p>{post.short_description}</p>
											<div className={style.news_posts__info}>
												<span>{post.date}</span>
												<span>{post.author}</span>
												<NavLink to={`/posts/` + post.id}>Подробнее</NavLink>
											</div>
										</div>
								</article>
								)
							})}
					</div>
			</div>
		</Container>
	</section>
}
