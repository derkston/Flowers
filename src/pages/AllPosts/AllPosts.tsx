import type { FC } from 'react'
import { FAKE__POSTS } from '../../api/FAKE_POSTS'
import { Container } from '../../components/Container/Container'
import { Post } from '../../components/Post/Post'
import type { IPost } from '../../Types/post.type'
import style from './AllPosts.module.css'
export const AllPosts : FC = () => {
	return <main>
		<Container>
			<div className={style.all_posts__wrapper}>
				{FAKE__POSTS.map((e : IPost) => {
					return <Post key={e.id} post={e} fullPost={false}/>
				})}
			</div>
		</Container>
	</main>
}
