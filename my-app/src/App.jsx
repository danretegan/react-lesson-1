import './App.css'

function App() {

const title = 'React'

const clickButton = () => {
  console.log('button 1 clicked');
}

const menuItems = [
  { name: 'Home' },
  { name: 'About' },
  { name: 'Contacts' },
]

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        <li>{menuItems[0].name}</li>
        <li>{menuItems[1].name}</li>
        <li>{menuItems[2].name}</li>
      </ul>
    <p>Acesta este primul meu text in React!</p>
    <button onClick={clickButton}>Click button 1!</button>
    <button onClick={() => {console.log('button 2 clicked')}}>Click button 2!</button>
    </div>
  )
}

export default App
