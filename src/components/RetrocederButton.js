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
    RetrocederButton{
        background:white;
        color: purpura;
        border-radius: 5px;
        margin: 50px;
    }
})
export default RetrocederButton;