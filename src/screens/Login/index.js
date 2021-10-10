import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

function Login() {
    const [username, setUsername] = useState('')
    const navigation = useNavigation()

    function navigate() {
        navigation.navigate('Tabs', { name: username })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Área Restrita</Text>
            <TextInput style={styles.textInput} placeholder="usuario" value={username} onChangeText={(text) => setUsername(text)}/>
            <TextInput style={styles.textInput} placeholder="senha"/>
            <Text style={styles.formText}>Não possui uma conta? Cadastre-se!</Text>
            <View style={styles.button}>
                <Button title="Autenticar" onPress={() => navigate()} color="#6E5494"/>
            </View>
        </View>
    )
}
export default Login