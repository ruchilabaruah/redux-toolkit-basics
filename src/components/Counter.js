import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};

  const incrementCounterHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment(5));
  };

  const decrementCounterHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>
    </main>
  );
};

export default Counter;
