import {} from 'react';
import styles from './styles';
function RetrocederButton() {
    return(
        <button  onclick ={()=> {window.history.back();}}>
            <FontAwesomeIcon icon="fa-solid fa-arrow-rotate-left" />
        </button>
    )
}

export default RetrocederButton;