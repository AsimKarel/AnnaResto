import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Page from './components/Page';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormViewer from './screens/FormViewer';
import Restaurants from './screens/Restaurants';
import Applications from './screens/Applications';

const App: () => JSX.Element = () => {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Restaurants} />
        <Stack.Screen name="Applications" component={Applications} />
        <Stack.Screen name="FormViewer" component={FormViewer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
