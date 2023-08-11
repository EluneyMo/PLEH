import {} from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
function UsuarioButton(){
    return (
    <button onclick ={()=> {window.location.href="/Usuario.js";}}>
           <FontAwesomeIcon icon="fa-light fa-user" />" 
    </button>  
    )
}
export default UsuarioButton;