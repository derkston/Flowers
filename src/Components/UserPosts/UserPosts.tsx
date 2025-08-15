import { useAllPost } from '../../Hooks/useAllPost'
import { useAuth } from '../../hooks/useAuth'
import { Post } from '../Post/Post'
import { Loading } from '../ui/Loading/Loading'


export const UserPosts = () => {
	const {user} = useAuth();
	const {posts , loading , error} = useAllPost();
	const userPosts = posts.filter(post => post.UID == user.uid)
	if(loading){
		return <Loading/>
	}
	if(error){
		return <div>Произошла ошибка</div>
	}
	return <div>
		{userPosts.map(post => <Post key={post.id} post={post}/>)}
	</div>
}
