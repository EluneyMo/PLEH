import {} from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
function UsuarioButton(){
    return (
    <button onclick ={()=> {window.location.href="/Usuario.js";}}>
           <FontAwesomeIcon icon="fa-light fa-user" />" 
    </button>  
    )
}
const styles = StyleSheet.create({
    RetrocederButton: {
    
            backgroundColor: 'white',
            
        
      },
})
export default UsuarioButton;