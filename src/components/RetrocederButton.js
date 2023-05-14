import {} from 'react';
function RetrocederButton() {
    return(
        <button  onclick ={()=> {window.location.href="/";}}>
            <FontAwesomeIcon icon="fa-solid fa-arrow-rotate-left" />
        </button>
    )
}