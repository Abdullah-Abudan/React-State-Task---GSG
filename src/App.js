import { useState } from "react";
import Container from "./Component/Container";
import Counter from "./Component/Counter";
const initialState = [
  { id: 1, value: 0, factor_Num: 1 },
  { id: 2, value: 0, factor_Num: 2 },
  { id: 3, value: 0, factor_Num: 3 },
  { id: 4, value: 0, factor_Num: 4 },
];

function App() {
  const [state, setState] = useState(initialState);
  const [total, setTotal] = useState(0);

  const onDecrement = (id, factor_Num) => {
    let newState = [...state];
    let item = { ...state[id] };
    //خاص بضمان ألا تكون القيمة سالبة
    if (item.value > 0) item.value = item.value - Number(factor_Num);
    else {
      this.total = 0;
    }

    newState[id] = item;
    setTotal((prevTotal) => prevTotal - Number(factor_Num));
    setState(newState);
  };

  const onIncrement = (id, factor_Num) => {
    let newState = [...state];
    let item = { ...state[id] };
    item.value = item.value + Number(factor_Num);
    newState[id] = item;
    setTotal((prevTotal) => prevTotal + Number(factor_Num));
    setState(newState);
  };

  return (
    <Container>
      <div className="App">
        <div>
          {state.map((counter) => (
            <Counter
              key={counter.id}
              id={counter.id}
              value={counter.value}
              onIncrement={() =>
                onIncrement(counter.id - 1, counter.factor_Num)
              }
              onDecrement={() =>
                onDecrement(counter.id - 1, counter.factor_Num)
              }
            />
          ))}
        </div>
        <p>Total is: {total}</p>
      </div>
    </Container>
  );
}

export default App;
