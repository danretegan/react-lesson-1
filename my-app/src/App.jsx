import './App.css'
import Button1 from './Button1';
import Button2 from './Button2';
import Button3 from './Button3';
import Menu from './Menu';
import SearchBar from './SearchBar';
import TutorsList from './TutorsList';

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

const data = 
  {
    "name": "MIT",
    "description": "Experience, a concentration of knowledge and the ability to avoid most recruiting mistakes. We know what most local and foreign companies want and we can give it to you. And we are constantly improving our programming courses, adding something new there. You can see the success stories of our alumni for yourself to see the effectiveness of our teaching methodology. Yes, we will start with the basics and the most basic information. We know that most people come to us with zero knowledge. ",
    "tutors": [
      {
        "firstName": "Dan",
        "lastName": "Retegan",
        "phone": "+40 753 023 616",
        "email": "danretegan@yahoo.com",
        "city": "New York",
        "options": "Web Developer"
      },
      {
        "firstName": "Antonio",
        "lastName": "García",
        "phone": "+34 456 890 302",
        "email": "antonio.garcia@goit.global",
        "city": "Madrid",
        "options": "Group creation, editing teacher profiles"
      }
    ],
    "cities": ["New-York", "London", "Berlin"],
    "department": [
      { "name": "Faculty of Computer Science" },
      { "name": "Faculty of Automation" },
      { "name": "Faculty of Neural Networks" }
    ]
  }


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

      <SearchBar text={'12345678901'} esteVizibil={isVisible} pret={753}/>

      <TutorsList elemente={data.tutors}/>

    </div>
  )
}

export default App
