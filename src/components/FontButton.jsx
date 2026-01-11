
import "./FontButton.scss"

export const FontButton = ({ onIncrease, onDecrease }) => {


  return (
    <div className="fontbtn">
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}
