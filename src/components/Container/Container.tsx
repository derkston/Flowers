import { type ReactNode } from 'react'

import style from './Container.module.css'
export const Container : React.FC<{ children: ReactNode }> = ({children}) => {
	return <div className={style.container}>
		{children}
	</div>
}
