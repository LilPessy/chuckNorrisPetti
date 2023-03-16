import "../styles/Dropdown.css"

function Dropdown({variant, list, clbk}){
    function renderClasses(){
        let classes = ["dropdown", "flexCol"];
        return classes.join(" ")
      }
    
    function handleChange(e){
        clbk(e.target.value)
    }  

    return(
        <div className={renderClasses()}>
            <select onChange={(e)=>{handleChange(e)}}>
                <option value = "">Scegli una categoria</option>
                {list.map((item, index)=>{
                   return(<option key={index} value={item} >{item.charAt(0).toUpperCase() + item.slice(1)}</option>)
                })}
            </select>
        </div>  
    )
}

export default Dropdown