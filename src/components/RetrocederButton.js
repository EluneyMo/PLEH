import {} from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
function RetrocederButton() {
    return(

        <button  onclick ={()=> {window.history.back();}}>
            <FontAwesomeIcon icon="fa-solid fa-arrow-rotate-left" />
        </button>
    )
}

const styles = StyleSheet.create({
    RetrocederButton: {
      backgroundColor: 'white',
      color: 'purpura', // Estos deben ser valores válidos de color
      borderRadius: 5,
      margin: 50,
    },
export default RetrocederButton;


