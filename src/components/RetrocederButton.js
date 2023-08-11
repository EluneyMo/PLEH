import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@expo/vector-icons'; 
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
      color: 'purpura', 
      borderRadius: 5,
      margin: 50,
    }),

export default RetrocederButton;


