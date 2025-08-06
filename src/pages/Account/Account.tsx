import { useState } from 'react'
import { Container } from '../../components/Container/Container'
import { GoogleAuth } from '../../components/services/GoogleAuth'
import { auth } from '../../main'
import style from './Account.module.css'
export const Account = () => {
	const [email , setEmail] = useState('')
	const [password , setPassword] = useState('')
    console.log(email)
		console.log(password)
		console.log(auth)
	return <main>
		<Container>
			<section className={style.account}>
					<fieldset className={style.fieldset_reg}>
						<h2 className={style.form_title}>Зарегистрироваться</h2>
						<form  className={style.form}>
							<div className={style.input__wrapper}>
							<label>Введите email</label>
								<input   placeholder='email' type="email" />
							</div>
							<div className={style.input__wrapper}>
								<label>Введите пароль</label>
								<input  placeholder='password' type="password" />
							</div>
							<button 	 type='submit'>Отправить</button>
						</form>
					</fieldset>
					<fieldset className={style.fieldset_auth}>
						<h2 className={style.form_title}>Или войти</h2>
						<GoogleAuth/>
					</fieldset>
			</section>
		</Container>
	</main>
}
