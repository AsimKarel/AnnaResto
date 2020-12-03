import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DateField } from '../../Models/models'

const DateFieldView = (props:DateField) => {
    return (
        <View style={styles.item}>
            <View style={styles.content}>
                <Text style={styles.question}>{props.title} </Text>
                <Text style={styles.answer}>{props.date} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        flexDirection: "row",
    },
    content: {
        flex: 3,
    },
    question: {
        fontWeight: "500",
        fontSize: 18
    },
    answer: {
        fontWeight: "500",
        color: "grey",
        fontSize: 18
    }
})
export default DateFieldView


