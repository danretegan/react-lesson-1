import './App.css'
import Button1 from './Button1';
import Button2 from './Button2';
import Button3 from './Button3';
import Menu from './Menu';
import SearchBar from './SearchBar';

function App() {

const isVisible = true;

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
      <Menu elemente={menuItems}/>
      <Menu elemente={menuItems}/>

      <p>Acesta este primul meu text in React!</p>

      {/* Transmitem proprietatea 'clickProp' cu valoarea funcției 'clickButton' către componenta 'Button1' */}
      <Button1 clickProp={clickButton}/>
      
      <Button2 />

      <Button3 text='Click button' icon='3' handleClick={() => {console.log('button 3 clicked')}}/>

      <SearchBar text={'12345678901'} esteVizibil={isVisible} pret={23}/>

    </div>
  )
}

export default App
