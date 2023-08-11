import React from "react";
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Sigup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
}
const usuariocreado = async () => {
    const response = await axios.post('/', {
        username,
        email,
        password,
}
export default Sigup
