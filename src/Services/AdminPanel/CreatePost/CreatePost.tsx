import { useState } from 'react'
import type { IPost } from '../../../Types/types'
import { CreateForm } from '../../CreateForm/CreateForm'
import { PreviewFormContent } from '../../PreviewFormContent/PreviewFormContent'

export const CreatePost = () => {
	const [post , setPost] = useState<IPost>()
	return <div className="create_post">
			<CreateForm setPost={setPost} activeForm='CreatePost'/>
			<PreviewFormContent previewContent={post}/>
		</div>
}
