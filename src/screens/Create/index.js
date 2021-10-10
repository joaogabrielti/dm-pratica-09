import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import Header from '../../components/Header'
import styles from './style'

export default function Create() {
    const [titulo, setTitulo] = useState()
    const [autor, setAutor] = useState()
    const [categoria, setCategoria] = useState()
    const [ano, setAno] = useState()
    const [isbn, setIsbn] = useState()

    const navigation = useNavigation()

    async function saveBook() {
        const json = await AsyncStorage.getItem('books')
        const books = (json != null) ? JSON.parse(json) : []

        const book = {
            id: books.length,
            titulo: titulo,
            autor: autor,
            categoria: categoria,
            ano: ano,
            isbn: isbn,
        }

        const arr = [...books, book]

        await AsyncStorage.setItem('books', JSON.stringify(arr))
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Header text="Novo Livro"/>
            <View style={styles.center}>
                <TextInput style={styles.textInput} placeholder="titulo" value={titulo} onChangeText={(text) => setTitulo(text)} />
                <TextInput style={styles.textInput} placeholder="autor" value={autor} onChangeText={(text) => setAutor(text)} />
                <TextInput style={styles.textInput} placeholder="categoria" value={categoria} onChangeText={(text) => setCategoria(text)} />
                <TextInput style={styles.textInput} placeholder="ano" value={ano} onChangeText={(text) => setAno(text)} />
                <TextInput style={styles.textInput} placeholder="isbn" value={isbn} onChangeText={(text) => setIsbn(text)} />
                <View style={styles.button}>
                    <Button title="Salvar" color="#6E5494" onPress={() => saveBook()} />
                </View>
            </View>
        </View>
    )
}