import { Link, NavLink } from 'react-router'
import { FAKE__POSTS } from '../../../api/FAKE_POSTS'
import type { IPost } from '../../../Types/post.type'
import { Container } from '../../Container/Container'
import style from './News.module.css'
export const News = () => {
	return <section>
		<Container>
			<div className={style.news__wrapper}>
					<div className={style.news__title}>
						<h2>Новости & обновления</h2>
						<Link to='/posts'>Все посты</Link>
					</div>
					<div className={style.news__posts}>
							{FAKE__POSTS.slice(0 , 4).map((e : IPost) => {
								return (
									<article className={style.news_post} key={e.id}>
										<img src={e.image} />
										<div className={style.news_post__text}>
											<h4>{e.title}</h4>
											<p>{e.short_description}</p>
											<div className={style.news_posts__info}>
												<span>{e.date}</span>
												<NavLink to={`/posts/` + e.id}>Подробнее</NavLink>
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
