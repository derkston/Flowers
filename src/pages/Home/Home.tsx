import { Discover } from '../../components/sections/Discover/Discover'
import { News } from '../../components/sections/News/News'
import { Preview } from '../../components/sections/Preview/Preview'

export const Home = () => {
	return <main>
		<Preview/>
		<Discover/>
		<News/>
	</main>
}
