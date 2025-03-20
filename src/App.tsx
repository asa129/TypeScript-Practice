import { useState } from 'react';
import './App.css'
import axios from 'axios'
import { Todo } from './Todo';
import { TodoType } from './types/todo';
import { Text } from './Text';
import { UserProfile } from './UserProfile';
import { User } from './types/user';

function App() {
  const [datas, setDatas] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
      .then(response => setDatas(response.data))
  }

  const user: User = {
    name: "あああ",
    hobby: ["散歩", "ごはん"],
  };

  return (
    <>
      <Text color="red" fontSize={20}/>
      <UserProfile user={user}/>
      <button onClick={onClickFetchData}>Jsonとるよ</button>
      <div>
      {datas.map((data) => <Todo title={data.title} userId={data.userId} completed={data.completed}/>)}
      </div>
    </>
  )
}

export default App
