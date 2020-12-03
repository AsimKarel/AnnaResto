import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import Header from '../components/Header';
import RestaurantItem from '../components/RestaurantItem';
import { useRestaurants } from '../hooks/useRestaurants';

const Restaurants = (props:any) => {
    const restaurants = useRestaurants();
    console.log({ restaurants });

    return (
        <>
        <Header />
        <FlatList
            style={{ width: '95%' }}
            keyExtractor={(item, index) => index.toString()}
            data={restaurants}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <RestaurantItem name={item.title} onClick={()=>props.navigation.navigate('Applications',{restaurant:item.id})}/>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            
        />
        </>
    )
}

const styles = StyleSheet.create({
    separator: {
        height: 0.5,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
});

export default Restaurants
