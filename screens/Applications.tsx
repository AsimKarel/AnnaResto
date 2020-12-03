import React from 'react'
import { View, ScrollView, Text, FlatList, StyleSheet } from 'react-native'
import ApplicationCardItem from '../components/ApplicationCardItem';
import { useApplications } from '../hooks/useApplications';

const Applications = (props:any) => {

    const applications = useApplications(props.route.params.restaurant)
    
    return (
            // <ScrollView>
              <View style={styles.container}>
                <Text style={styles.head}>Select The Application to View</Text>
                {/* <Loader loading={this.state.isLoadingData} /> */}
                <FlatList
                  data={applications}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <ApplicationCardItem
                      name={item.name}
                      onPress={() => props.navigation.navigate('FormViewer') }
                    />
                )}
                  numColumns={2}
                />
              </View>
            // </ScrollView>
          );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      marginHorizontal: 20,
    },
    itemHorizontal: {
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
      width: 70,
      height: 100,
    },
    titleText: {
      padding: 5,
    },
    head: {
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      marginTop: 5,
      marginBottom: 5,
    },
  });
  

export default Applications
