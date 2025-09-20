import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store';
import { decrement, increment, selectCounterValue } from './store/conter';
import { useAppDispatch, useAppSelector } from './hooks/useStore';
import { BaseUser, selectUserState, update } from './store/user';

function App() {
  // const [count, setCount] = useState<null | number>(null)
  const count = useAppSelector(selectCounterValue);
  const user = useAppSelector(selectUserState);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    // store.dispatch(increment());
    // setCount(store.getState().counter.value)
    dispatch(increment());
  }

  const handleDecrement = () => {
    store.dispatch(decrement());
    // setCount(store.getState().counter.value)
  }

  const handleChangeName = () => {
    dispatch(update({
      ...user as BaseUser,
      name: "Tinubu",
    }))
  }

  return (
    <div className="App">
      <h1>Welcome, {user.name}</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={handleDecrement}>Decrement</button>{' '}
        <button onClick={handleIncrement}>Increment</button><br/>
        <button onClick={handleChangeName}>Change Name</button>
      </div>
    </div>
  );
}

export default App;
