import { useState } from 'react'
import '../styles/Button.css'

function Button({clbk, variant, msg}) {

  function renderClasses(){
    let classes = ["btn", "d-flex", "bgRed", variant];
    return classes.join(" ")
  }

  function componentClickHandler(){
    //condizioni
    clbk()
  }

  return (
    <div className={renderClasses()} onClick={()=>{componentClickHandler()}}>
        {msg}
    </div>
  )
}

export default Button
