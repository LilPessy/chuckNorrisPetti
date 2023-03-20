import "../styles/Canva.css"
import { useEffect } from "react";

function Canva({joke}){
    function renderClasses(){
        let classes = ["canva", "jokeFont", joke == "" && "d-none"];
        return classes.join(" ")
    } 

    return(
        <div className={renderClasses()}>
            <h4>
                {joke}
            </h4>
        </div>  
    )
}

export default Canva