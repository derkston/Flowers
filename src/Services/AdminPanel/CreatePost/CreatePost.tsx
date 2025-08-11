import { useState } from 'react'
import type { IPost } from '../../../Types/types'
import { CreateForm } from '../../CreateForm/CreateForm'
import { PreviewFormContent } from '../../PreviewFormContent/PreviewFormContent'
import style from './CreatePost.module.css'
export const CreatePost = () => {
	const [post , setPost] = useState<IPost>()
	return <div className={style.create_post}>
			<CreateForm setPost={setPost} activeForm='CreatePost'/>
			<PreviewFormContent previewContent={post}/>
		</div>
}
