import { useState } from 'react';
import './App.css'
import axios from 'axios'
import { Todo } from './Todo';

function App() {
  const [datas, setDatas] = useState<Array<TodoType>>([]);

  type TodoType = {
      userId: number;
      id: number;
      title: string;
      completed: boolean;
  };

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
      .then(response => setDatas(response.data))
  }

  return (
    <>
      <button onClick={onClickFetchData}>Jsonとるよ</button>
      <div>
      {datas.map((data) => <Todo title={data.title} userId={data.userId} completed={data.completed}/>)}
      </div>
    </>
  )
}

export default App
