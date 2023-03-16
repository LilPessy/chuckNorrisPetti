import "../styles/Dropdown.css"
import { useEffect } from "react";

function Dropdown({list, clbk}){
    function renderClasses(){
        let classes = ["dropdown", "flexCol"];
        return classes.join(" ")
    }
    
    function handleChange(e){
        clbk(e.currentTarget.value)
    }  

    return(
        <div className={renderClasses()}>
            <select onChange={(e)=>{handleChange(e)}}>
                <option>Scegli una categoria</option>
                {list.map((item, index)=>{
                   return(<option key={index} value={item} >{item.charAt(0).toUpperCase() + item.slice(1)}</option>)
                })}
            </select>
        </div>  
    )
}

export default Dropdown