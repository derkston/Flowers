import { type FC, type FormEvent } from 'react'
import { FAKE__POSTS } from '../../api/FAKE_POSTS'
import { useAuth } from '../../hooks/useAuth'
import type { ICreateFormProps, IPost, IProduct } from '../../Types/types'
import style from './CreateForm.module.css'
export const CreateForm : FC<ICreateFormProps> = ({activeForm ,  setProduct, setPost,} ) => {
	const {user} = useAuth();
	function handleForm(e: FormEvent) {
    e.preventDefault() 
		const formValues = e.currentTarget.children ;
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
    } else if (activeForm === 'CreatePost' && setPost) {
      setPost(fake_post)
    }
  }
	const fake_post : IPost = FAKE__POSTS[0] 
	return	(
		activeForm == 'CreateProduct' 
			&&	<div className={style.create_form}>
					<h2>Создайте свой товар</h2>
					<form onSubmit={(e) => handleForm(e)}>
					<div className={style.input__wrapper}>
							<label htmlFor="title">Введите название продукта</label>
							<input  name='title' type="text" />
					</div>
					<div className={style.input__wrapper}>
							<label htmlFor="short_description">Введите краткое описание продукта</label>
							<textarea  name='short_description'  />
					</div>
					<div className={style.input__wrapper}>
							<label htmlFor="full_description">Введите  описание продукта</label>
							<textarea  name='full_description'  />
					</div>
					<div className={style.input__wrapper}>
							<label htmlFor="quantity">Введите  кол-во продукта</label>
							<input  name='quantity' type="number" />
					</div>
					<div className={style.input__wrapper}>
							<label htmlFor="price">Установите цену продукта</label>
							<input  name='price' type="number" />
					</div>
					<button type='submit'>Установить продукт</button>
				</form>
			</div>
		|| 
		activeForm == 'CreatePost' 
		&& <form  className={style.create_form}>
			<h2>CreatePost</h2>
			<button onClick={(e)  => handleForm(e)}>Установить пост</button>
		</form>
	)
}
