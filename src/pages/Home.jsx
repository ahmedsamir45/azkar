import useAzkar from '../hooks/useAzkar'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'
import "./Home.scss"
function Home() {
  const { data, loading, error } = useAzkar()

  if (loading) return <Loading />
  if (error) return <p>Error loading azkar</p>

  return (
    <div className="home">
      <h1>الأذكار</h1>
      <div className="categories">
        {Object.keys(data).map(category => (
          <div key={category}>
            <Link to={`/azkar/${category}`}>{category}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
