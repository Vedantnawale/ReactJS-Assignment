import './App.css'
import Button from './components/Button'
import Header from './components/Header'
import List from './components/List'
import Person from './components/Person'

function App() {

  return (
    <>
    <Header title = "ReactJS Assignment" />
    <Person name = "Vedant" age = "18" />
    <Button text = "Click Button" onClick = {() => console.log("Button Clicked") } />
    <List items={['apple', 'banana', 'orange']} />
    </>
  )
}

export default App
