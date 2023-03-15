import "../styles/EditorialContent.css"

function Dropdown({variant, list}){

    

    function loadCategories(){
        /*
            fetch delle categorie con la map dell'array di oggetti

            ogni oggetto avrà i seguenti campi{values = "myValue",label = "cio che vdede l'utente"}
        */
    }

    

    function renderClasses(){
        let classes = ["dropdown", "flexCol"];
        return classes.join(" ")
      }

    return(
        <div className={renderClasses()}>
            <select>
                <option>Scegli una categoria</option>
                {/*qui ci va la map*/}
            </select>
        </div>  
    )
}

export default EditorialContent