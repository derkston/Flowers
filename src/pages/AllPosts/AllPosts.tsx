import { type FC } from 'react'
import { Container } from '../../components/Container/Container'
import { Post } from '../../components/Post/Post'
import { Loading } from '../../components/ui/Loading/Loading'
import { useAllPost } from '../../Hooks/useAllPost'
import type { IPost } from '../../Types/types'
import style from './AllPosts.module.css'

export const AllPosts : FC = () => {
	const {posts , loading , error} = useAllPost();
  if (loading) {
    return <Loading/>
  }
  if (error) {
    return <div>Ошибка: {error}</div>;
  }
  if (posts.length === 0) {
    return <div>Пока нет ни одного поста.</div>;
  }
	return <main>
		<Container>
			<div className={style.all_posts__wrapper}>
				{posts.map((e : IPost) => {
					return <Post key={e.id} post={e} />
				})}
			</div>
		</Container>
	</main>
}
