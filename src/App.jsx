import { useEffect, useState } from 'react'
import './styles/App.css'
import Button from "./components/Button.jsx"
import EditorialContent from './components/EditorialContent.jsx'
import Dropdown from './components/Dropdown.jsx'

function App() {

  const [joke, setJoke] = useState("")
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")

  function loadJoke(){
   console.log("qui carico il joke")
   setJoke("losasso puzza")
  }

  function copyJoke(){
    console.log("joke copiato")
  }

  function loadCategories(){
    fetch("https://api.chucknorris.io/jokes/categories")
    .then((response) => response.json())
    .then((data) => {setCategories(data)});

  }

  function setCategory(c){
    setSelectedCategory(c)
  }

  useEffect(()=>
    loadCategories(), []
  )
  

  return (
    <div className="App">

      <EditorialContent
        title="Webapp API Chuck Norris"
        subtitle = "Design di una pagina che utilizza la API di chucknorris.io per generare alla pressione di un pulsante una battuta del tipo che selezioni nel menu a tendina qui sotto.otitolo"
      />

      <img src="../public/img/logo.png" className="logo"/>

      <Dropdown
        list = {categories}
        clbk = {setCategory}
      />

      <Button 
        clbk = {loadJoke}
        variant = {joke == "" ? "disabled" : "enabled"}  
        msg = "CARICA JOKE"
      />

      {joke !== "" &&
        <div className='div'>{joke}</div>
      }
    </div>
  )
}

export default App
