import { useState } from 'react';
import './App.css'
import axios from 'axios'
import { Todo } from './Todo';
import { TodoType } from './types/todo';
import { Text } from './Text';

function App() {
  const [datas, setDatas] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
      .then(response => setDatas(response.data))
  }

  return (
    <>
      <Text color="red" fontSize={20}/>
      <button onClick={onClickFetchData}>Jsonとるよ</button>
      <div>
      {datas.map((data) => <Todo title={data.title} userId={data.userId} completed={data.completed}/>)}
      </div>
    </>
  )
}

export default App
