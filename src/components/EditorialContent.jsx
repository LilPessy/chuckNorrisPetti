import "../styles/EditorialContent.css"

function EditorialContent({title, subtitle}){

    function renderClasses(){
        let classes = ["editorialContent", "flexCol"];
        return classes.join(" ")
      }

    return(
        <div className={renderClasses()}>
            <h1 className="title regular">{title}</h1>
            <h3 className="subtitle regular">{subtitle}</h3>
        </div>  
    )
}

export default EditorialContent