import './AzkarCard.scss'
import { useState } from 'react'

function AzkarCard({ zekr }) {

      const [count, setCount] = useState(zekr.count)
      const handleClick=()=>{
        if (count>1){

          setCount(count-1)
        }
        else {
          setCount(0)
        }
      }

  return (
    <button className="card" onClick={handleClick}>
      <p>{zekr.content}</p>
      <small>عدد المرات: {count > 0 ? `عدد المرات: ${count}` : "تم بحمد الله"}</small>
    </button>
  )
}

export default AzkarCard
