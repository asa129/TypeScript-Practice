import { useState } from 'react';
import './App.css'
import axios from 'axios'

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
      {data.map((data: any) => <p>{data.title}</p>)}
      </div>
    </>
  )
}

export default App
