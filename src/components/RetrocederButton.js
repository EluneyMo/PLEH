import {} from 'react';
import { StyleSheet } from 'react-native';
function RetrocederButton() {
    return(
        <button  onclick ={()=> {window.history.back();}}>
            <FontAwesomeIcon icon="fa-solid fa-arrow-rotate-left" />
        </button>
    )
}
const styles = StyleSheet.create({
    *{
        color:white;
        
    }
})
export default RetrocederButton;