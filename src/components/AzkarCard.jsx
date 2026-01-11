import './AzkarCard.scss'
import { useState } from 'react'

function AzkarCard({ zekr,style }) {

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
    <button className="card" onClick={handleClick} style={style}>
      <p>{zekr.content}</p>
      <small>{count > 0 ? `عدد المرات: ${count}` : "تم بحمد الله"}</small>
    </button>
  )
}

export default AzkarCard
