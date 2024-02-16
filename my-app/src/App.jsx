import './App.css'
import Menu from './Menu';

function App() {

const title = 'React'

const clickButton = () => {
  console.log('button 1 clicked');
}

const menuItems = [
  { 
    id: 0,
    name: 'Home' 
  },
  { 
    id: 1,
    name: 'About' 
  },
  { 
    id: 2,
    name: 'Contacts' 
  },
]

  return (
    <div>
      <h1>{title}</h1>

      <Menu elemente={menuItems}/>

      <p>Acesta este primul meu text in React!</p>
      <button onClick={clickButton}>Click button 1!</button>
      <button onClick={() => {console.log('button 2 clicked')}}>Click button 2!</button>
    </div>
  )
}

export default App
