import React from 'react'
import { FlatList, View, StyleSheet, Text } from 'react-native'
import { getRenderItem } from '../Helpers/FieldViewFactory';
import { useApplicationForm } from '../hooks/useApplicationForm';
import { Field } from '../Models/models';

const FormViewer = () => {
    const [loaded_data, loading] = useApplicationForm();
    
    return (
        <>
            {loading && <Text> Loading </Text>}
            {!loading && <FlatList 
                style={{ width: '95%' }}
                keyExtractor={(item, index) => index.toString()}
                data={loaded_data as Field[]}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <>
                    {getRenderItem(item)}
                    </>
                )}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            >
            </FlatList>}
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    separator: {
        height: 0.5,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
})
export default FormViewer