import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export interface Props {
  name: String;
  onClick: ()=>{}
}

const RestaurantItem:React.FC<Props> = (props) => {
    const [name, setName] = React.useState(props.name);
    const onClick = () => {
        props.onClick()
    }

    return(
        <TouchableOpacity style={styles.item} onPress={onClick}>
            <View style={styles.content}>
                <Text style={styles.text}>
                    {name}
                </Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        height: 70,
        flexDirection: "row",
    },
    content: {
        flex: 3,
    },
    text: {
        fontSize: 20,
    }
})

export default RestaurantItem;