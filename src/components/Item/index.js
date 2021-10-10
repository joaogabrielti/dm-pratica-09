import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'

export default function Item(props) {
    const book = props.book.item

    return (
        <View style={styles.container}>
            <Icon name="book-open-page-variant" color="#6E5494" size={48} />
            <View style={styles.title}>
                <Text style={{ fontWeight: 'bold' }}>{book.titulo}</Text>
                <Text>{book.autor}</Text>
            </View>
            <View style={styles.action}>
                <Text style={{ marginBottom: 8 }}>{book.categoria}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Icon style={{ marginEnd: 3 }} name="book-search" color="#0A0" size={32} />
                    <Icon name="book-remove" color="#A00" size={32} />
                </View>
            </View>
        </View>
    )
}