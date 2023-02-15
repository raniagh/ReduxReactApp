import { useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const toggleCounterHandler = () => {};

  //when using useSelector react redux will set aotmatically a subscription to the redux store
  const counter = useSelector((state) => state.counter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
