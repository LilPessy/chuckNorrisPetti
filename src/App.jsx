import { useEffect, useState } from 'react'
import './styles/App.css'
import Button from "./components/Button.jsx"
import EditorialContent from './components/EditorialContent.jsx'
import Dropdown from './components/Dropdown.jsx'
import Canva from './components/Canva'

function App() {

  const [joke, setJoke] = useState("")
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")

  function loadJoke(){
    let url = selectedCategory !== "" ? `https://api.chucknorris.io/jokes/random?category=${selectedCategory}` : "https://api.chucknorris.io/jokes/random"
    fetch(url)
      .then((response) => response.json())
      .then((data) => {setJoke(data.value)});
  }

  function copyJoke(){
    navigator.clipboard.writeText(joke)
  }

  function loadCategories(){
    fetch("https://api.chucknorris.io/jokes/categories")
    .then((response) => response.json())
    .then((data) => {setCategories(data)});

  }

  /*function setCategory(c){
    setSelectedCategory(c)
    console.log(selectedCategory)
  }*/
  

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
        clbk = {setSelectedCategory}
      />

      <Canva
        joke = {joke}
      />

      <div className = "btnContainer flexCol">
        <Button 
          clbk = {loadJoke}
          variant = "enabled"  
          msg = "CARICA JOKE"
        />

        <Button 
          clbk = {copyJoke}
          variant = {joke == "" ? "disabled" : "enabled"}  
          msg = "COPIA JOKE"
        />
      </div>
      
    </div>
  )
}

export default App
