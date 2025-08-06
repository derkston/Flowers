import { BrowserRouter } from 'react-router'
import { AppRoutes } from './AppRoutes/AppRoutes'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

export const App = () => {
	return <BrowserRouter  >
		<Header/>
		<AppRoutes/>
		<Footer/>
	</BrowserRouter>
	
}
