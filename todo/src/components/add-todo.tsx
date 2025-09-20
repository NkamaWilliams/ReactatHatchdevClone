import { useState } from "react"
import { useAppDispatch } from "../hooks/useStore";
import { add } from "../store/todo";

export default function TodoInput(){
  const [text, setText] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    dispatch(add({text}));
    setText("");
  }
  return (
    <div>
      <input type="text" value={text} onChange={e => {setText(e.target.value)}} />{' '}
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}