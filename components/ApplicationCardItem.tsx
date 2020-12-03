import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'

interface Props{
    onPress:()=>void,
    name:String
}

const ApplicationCardItem = (props:Props) => {
    return (
        <TouchableOpacity
            style={[styles.section]}
            onPress={props.onPress}>
            <View>
            <Text style={styles.text}>
                <Text>{props.name}</Text>
            </Text>
            <Text style={styles.subtext}>
                <Text style={styles.subtitle}></Text>
            </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    section: {
      backgroundColor: '#98c489',
      padding: 30,
      marginVertical: 15,
      borderRadius: 20,
      height: 150,
      paddingLeft: 10,
      paddingRight: 10,
      marginRight: 10,
      marginBottom: -3,
      justifyContent: 'center',
      width: Dimensions.get('window').width / 2 - 25,
    },
    text: {
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    subtext: {
      fontSize: 14,
      justifyContent: 'center',
      textAlign: 'center',
      flexShrink: 1,
    },
    subtitle: {
      fontSize: 14,
      color: '#454647',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
  });

export default ApplicationCardItem
