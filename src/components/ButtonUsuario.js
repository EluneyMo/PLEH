import {} from 'react';
function UsuarioButton(){
    return (
    <button onclick ={()=> {window.location.href="/Usuario.js";}}>
           <FontAwesomeIcon icon="fa-light fa-user" />" 
    </button>  
    )
}
export default UsuarioButton;