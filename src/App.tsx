import './App.css'

function App() {
  const onClickGetJson = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => console.log(response))
  }

  return (
    <>
      <button onClick={onClickGetJson}>Jsonとるよ</button>
    </>
  )
}

export default App
