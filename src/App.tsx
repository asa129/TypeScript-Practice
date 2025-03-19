import { useState } from 'react';
import './App.css'
import axios from 'axios'
import { Todo } from './Todo';

function App() {
  const [data, setData] = useState([]);

  const onClickFetchData = () => {
    axios('https://jsonplaceholder.typicode.com/todos')
      .then(response => setData(response.data))
  }

  return (
    <>
      <button onClick={onClickFetchData}>Jsonとるよ</button>
      <div>
      {data.map((data: any) => <Todo title={data.title} userid={data.userid}/>)}
      </div>
    </>
  )
}

export default App
