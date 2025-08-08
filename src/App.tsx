import { BrowserRouter } from 'react-router'
import { AppContext } from './AppContext/AppContext'
import { AppRoutes } from './Routes/AppRoutes/AppRoutes'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

export const App = () => {
	return <AppContext>
			<BrowserRouter  >
			<Header/>
			<AppRoutes/>
			<Footer/>
		</BrowserRouter>
	</AppContext>
	
}
