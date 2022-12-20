const Counter = ({ value, onDecrement, onIncrement }) => {
   
  return (
      <div className="counter">
        <span>{value}</span>
        <div className="counter-controls">
          <button className="button red-color"onClick={onDecrement}>
            -
          </button>
          <button className="button green-color"onClick={onIncrement} >
            +
          </button>
        </div>
      </div>
    );

}
export default Counter;