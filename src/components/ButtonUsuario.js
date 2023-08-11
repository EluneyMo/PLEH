import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@expo/vector-icons'; 

function UsuarioButton() {
  return (
    <TouchableOpacity
      onPress={() => {
      }}
      style={styles.UsuarioButton}
    >
      <FontAwesomeIcon name="user" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  UsuarioButton: {
    backgroundColor: 'white',
    color: 'purple', 
    padding: 10, 
    borderRadius: 5,
    margin: 10,
  },
});

export default UsuarioButton;
