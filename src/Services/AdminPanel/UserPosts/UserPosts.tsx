import { Post } from '../../../components/Post/Post'
import { Loading } from '../../../components/ui/Loading/Loading'
import { useAllPost } from '../../../Hooks/useAllPost'
import { useAuth } from '../../../hooks/useAuth'

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
	console.log(posts)
	return <div>
		{userPosts.map(post => <Post key={post.id} post={post}/>)}
	</div>
}
