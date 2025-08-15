import { useState } from 'react'

import { createNewDraftArticle } from '../../Firebase/PostArticle'
import { useAuth } from '../../hooks/useAuth'
import type { IPost } from '../../Types/types'
import { PreviewFormContent } from '../PreviewFormContent/PreviewFormContent'
import style from './CreatePost.module.css'
export const CreatePost = () => {
	const {user} = useAuth();
	const [post , setPost] = useState<IPost>()
	function handleCreatePost(e){
		e.preventDefault();
		const formChildren = e.currentTarget.children;
		const formPost : any = {
			UID : user.uid,
			author : user.displayName,
			date : Date.now(),
		};
		for(let i = 1 ; i < formChildren.length - 1 ; i++){
			const inputName : string = formChildren[i].children[1].name;
			const inputValue : string = formChildren[i].children[1].value;
			if(inputValue.length > 0) {
				formPost[inputName] = inputValue
			}else {
				return alert('Ваши поля пустые , пожалуйста заполните их')
			}
		}
		setPost(formPost)
		createNewDraftArticle(formPost)
	}
	return <div className={style.create_post}>
			<form onSubmit={e => handleCreatePost(e)} className={style.create__form_post} >
				<h2>Создайте пост</h2>
				<div className={style.input__wrapper}>
						<label htmlFor="title">Укажите название статьи</label>
						<input type="text" name='title' />
				</div>
				<div className={style.input__wrapper}>
						<label htmlFor="short__description">Укажите краткое описание статьи</label>
						<textarea name='short__description' />
				</div>
				<div className={style.input__wrapper}>
						<label htmlFor="full__description">Укажите полное описание статьи</label>
						<textarea name='full__description' />
				</div>
				<button type='submit'>Создать статью</button>
			</form>
			<PreviewFormContent previewContent={post} />
		</div>
}
