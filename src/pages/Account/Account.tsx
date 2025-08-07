import { useState, type ChangeEvent } from 'react'
import { Container } from '../../components/Container/Container'
import { Loading } from '../../components/ui/Loading/Loading'
import { GoogleAuth } from '../../services/GoogleAuth'
import { handleForm } from '../../services/Registration'
import style from './Account.module.css'

export const Account = () => {
	const [inputValue , setInputValue] = useState({ email : '' , password : ''});
	const [error , setError] = useState({email : false , password : false});
	const [loading , setLoading] = useState(false)
	const RegExp : RegExp =/^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
	const RegExp2 : RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

	function changeEmail(e : ChangeEvent<HTMLInputElement>){
		e.preventDefault();
		if(e.target.value == ''){
			setInputValue({...inputValue , email : ''} )
			setError({...error , email : false})
		}else {
			if (RegExp.test(e.target.value)){
				setInputValue({...inputValue , email : e.target.value} )
				setError({...error , email : false})
			}else {
				setError({...error , email : true})
			}
		}
	}
	function submitForm(e : React.MouseEvent<HTMLButtonElement, MouseEvent> ){
		e.preventDefault();
		if((inputValue.email && inputValue.password) != ''){
			setLoading(true)
			handleForm(
				inputValue.email , inputValue.password , () => setLoading(false))
			setInputValue({email : '' , password : ''})
		}else {
			setError({email : true , password : true})
		}
	}
	function changePassword(e : ChangeEvent<HTMLInputElement>){
		e.preventDefault();
		if(e.target.value == ''){
			setInputValue({...inputValue , password : ''} )
			setError({...error , password : false})
		}else {
			if (RegExp2.test(e.target.value)){
				setInputValue({...inputValue , password : e.target.value} )
				setError({...error , password : false})
			}else {
				setError({...error , password : true})
			}
		}
	}
	// Попробовать сделать кастомный хук для валидации формы с useReduce (или Redux)
	return <main>
		<Container>
			<section className={style.account}>
					<fieldset className={style.fieldset_reg}>
						<h2 className={style.form_title}>Зарегистрироваться</h2>
						{loading && <Loading/> }
						{!loading && <form  className={style.form}>
							<div  className={style.input__wrapper}>
							<label>Введите email</label>
								<input
								 defaultValue={inputValue.email}
								 onChange={(e) => changeEmail(e)}
								 placeholder='Email'
								 pattern={`${RegExp}`} 
								 style={{borderColor : error.email ? 'red' : 'var(--Body)'}}
								 type="email" />
								 <div
								 	style={{display : error.email ? 'block' : 'none'}}
								  className={style.input__error}>
									<span>Email должен содержать '@' , без пробелов</span>
								 </div>
							</div>
							<div className={style.input__wrapper}>
								<label>Введите пароль</label>
								<input
								defaultValue={inputValue.password} 
								pattern={`${RegExp2}`}  
								placeholder='Пароль должен быть не менее 6 символов' 
								style={{borderColor : error.password  ? 'red' : 'var(--Body)'}}
								onChange={(e) => changePassword(e) }
								type="password" />
								<div
								 	style={{display : error.password ? 'block' : 'none'}}
								  className={style.input__error}>
									<span>Пароль должен быть не менее 8 символов , без пробелов , содержать заглавную и обычные буквы</span>
								 </div>
							</div>
							<button onClick={(e) => submitForm(e)} type='submit'>Отправить</button>
						</form>}
					</fieldset>
					<fieldset className={style.fieldset_auth}>
						<h2 className={style.form_title}>Или войти</h2>
						<GoogleAuth/>
					</fieldset>
			</section>
		</Container>
	</main>
}


