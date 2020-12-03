import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native'
import { FileUploadField } from '../../Models/models'

const FileUploadFieldView = (props:FileUploadField) => {
    const handleClick = () => {
        if(!props.file_url){
            return
        }
        Linking.canOpenURL(props.file_url as string).then(supported => {
          if (supported) {
            Linking.openURL(props.file_url as string);
          } else {
            console.log("Don't know how to open URI: " + props.file_url as string);
          }
        });
      };

    return (
        <View style={styles.item}>
            <View style={styles.content}>
                <Text style={styles.question}>{props.title} </Text>
                <TouchableOpacity onPress={handleClick}>
                    <Text style={styles.answer}>{props.file_url} </Text>
                </TouchableOpacity>
                <Image style={styles.tinyLogo}
                    source={{
                    uri: props.file_url as string
                    }}
                />
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
        color: "blue",
        fontSize: 18
    },
    tinyLogo: {
      alignSelf:'center',
      width: 80,
      height: 80,
    },
})
export default FileUploadFieldView


