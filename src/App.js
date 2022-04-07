import './App.css'
import { useQuery } from 'react-query'
import { useState } from 'react'

function Button () {
  const { data, isLoading } = useQuery('todo', () => {
    return new Promise(resolve => setTimeout(() => resolve(111), 1000))
  })
  console.log({ data, isLoading }, 'data ?')

  return <button>I am Button {data}</button>
}
function App () {
  const [visiable, setVisiable] = useState(true)

  const toggle = () => {
    setVisiable(visiable => !visiable)
  }
  return (
    <div className='App'>
      <header className='App-header'>
        {visiable && <Button />}

        <button onClick={toggle}>Toggle</button>
        <h1>React-Query </h1>
      </header>
    </div>
  )
}

export default App
