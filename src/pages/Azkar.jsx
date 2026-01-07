import useAzkar from '../hooks/useAzkar'
import AzkarCard from '../components/AzkarCard'
import Loading from '../components/Loading'
import { useParams } from 'react-router-dom'
import "./Azkar.scss"
function Azkar() {
    const { data, loading, error } = useAzkar()
    const { category } = useParams() 
  if (loading) return <Loading />
  if (error) return <p>Error loading azkar</p>
 if (!data[category]) return <p>No Azkar found for {category}</p>

  return (
    <div className='container'>
      <h1>{category}</h1>

      {data[category].map((zekr, index) => (
        <AzkarCard key={index} zekr={zekr} />
      ))}
    </div>
  )
}

export default Azkar
