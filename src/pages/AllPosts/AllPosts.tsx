import type { FC } from 'react'
import { NavLink } from 'react-router'
import { FAKE__POSTS } from '../../api/FAKE_POSTS'
import { Container } from '../../components/Container/Container'
import type { IPost } from '../../Types/post.type'
import style from './AllPosts.module.css'
export const AllPosts : FC = () => {
	return <main>
		<Container>
			<div className={style.all_posts__wrapper}>
				{FAKE__POSTS.map((e : IPost) => {
					return <div className={style.post} key={e.id}>
						<img src={e.image} />
						<div className={style.post__text}>
								<h4>{e.title}</h4>
							<p>{e.short_description}</p>
							<div className={style.post__info}>
								<span>{e.date}</span>
								<NavLink to={`/posts/` + e.id}>Посмотреть</NavLink>
							</div>
						</div>
					</div>
				})}
			</div>
		</Container>
	</main>
}
