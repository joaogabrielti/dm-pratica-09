import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from '../../components/Header'
import Item from '../../components/Item'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Book() {
    const navigation = useNavigation()
    const [books, setBooks] = useState()

    async function loadBooks() {
        const json = await AsyncStorage.getItem('books')
        const arr = (json != null) ? JSON.parse(json) : []
        setBooks(arr)
    }

    useEffect(() => {
        loadBooks()
    })

    return (
        <View style={styles.container}>
            <Header text="Meus Livros"/>
            <View style={styles.center}>
                <View style={styles.button}>
                    <Icon.Button name="book-plus" backgroundColor="#6E5494" onPress={() => { navigation.navigate('Create') }}>Novo Livro</Icon.Button>
                </View>
                <View style={styles.items}>
                    <FlatList data={books}
                        keyExtractor={(book) => book.id}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={(item) => (
                            <Item book={item}/>
                        )}
                    />
                </View>
            </View>
        </View>
    )
}

export default Book