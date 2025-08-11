import { type FC, type FormEvent } from 'react'
import { createNewDraftArticle } from '../../Firebase/postArticle'
import { useAuth } from '../../hooks/useAuth'
import type { ICreateFormProps, IPost, IProduct } from '../../Types/types'
import style from './CreateForm.module.css'
export const CreateForm : FC<ICreateFormProps> = ({activeForm ,  setProduct, setPost,} ) => {
	const {user} = useAuth();
	function handleForm(e: FormEvent) {
    e.preventDefault() 
		const formValues = e.currentTarget.children ;
		// Логика создания товара
    if (activeForm === 'CreateProduct' && setProduct) {
			let newProduct : IProduct = {
				id : e.timeStamp,
				author : user.displayName,
				title : '',
				short_description : '' , 
				full_description : '' ,
				quantity : 0 ,
				price : 0 ,
			};
			for (let i = 0 ; i < formValues.length - 1 ; i++ ){
				const inputName = formValues[i].children[1].name;
				const inputValue = formValues[i].children[1].value;
				 newProduct = {...newProduct , [inputName] : inputValue}
			}
       setProduct(newProduct) 
    } else 		// Логика создания поста
			 if (activeForm === 'CreatePost' && setPost) {
					let newPost : IPost = {
					author : user.displayName,
					date : new Date().toISOString(),
					title : '',
					short_description : '' , 
					full_description : '' ,
				};
				for (let i = 0 ; i < formValues.length - 1 ; i++ ){
					const inputName = formValues[i].children[1].name;
					const inputValue = formValues[i].children[1].value;
					newPost = {...newPost , [inputName] : inputValue}
				}
				createNewDraftArticle(newPost)
				setPost(newPost)
				console.log(newPost)
    }
  }
	return	(
		activeForm == 'CreateProduct' 
		// Форма для создания товара 
			&&	<div className={style.create_form}>
					<h2>Создайте свой товар</h2>
					<form onSubmit={(e) => handleForm(e)}>
					<div className={style.input__wrapper}>
							<label htmlFor="title">Введите название продукта</label>
							<input required name='title' type="text" />
					</div>
					<div className={style.input__wrapper}>
							<label htmlFor="short_description">Введите краткое описание продукта</label>
							<textarea required   name='short_description'  />
					</div>
					<div className={style.input__wrapper}>
							<label htmlFor="full_description">Введите  описание продукта</label>
							<textarea required   name='full_description'  />
					</div>
					<div className={style.input__wrapper}>
							<label htmlFor="quantity">Введите  кол-во продукта</label>
							<input required   name='quantity' type="number" />
					</div>
					<div className={style.input__wrapper}>
							<label htmlFor="price">Установите цену продукта</label>
							<input required   name='price' type="number" />
					</div>
					<button type='submit'>Установить продукт</button>
				</form>
			</div>
		|| 
		activeForm == 'CreatePost' 
		// Форма для создания товара 
		&& <div className={style.create_form}>
					<h2>Создайте свой пост</h2>
					<form onSubmit={(e) => handleForm(e)}>
					<div className={style.input__wrapper}>
							<label htmlFor="title">Введите название поста</label>
							<input required   name='title' type="text" />
					</div>
					<div className={style.input__wrapper}>
							<label htmlFor="short_description">Введите краткое описание поста</label>
							<textarea required   name='short_description'  />
					</div>
					<div className={style.input__wrapper}>
							<label htmlFor="full_description">Введите  описание поста</label>
							<textarea required   name='full_description'  />
					</div>
					<button type='submit'>Установить поста</button>
				</form>
			</div>
	)
}
