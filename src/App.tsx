import './App.css'

function App() {
  const onClickGetJson = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  return (
    <>
      <button onClick={onClickGetJson}>Jsonとるよ</button>
    </>
  )
}

export default App
