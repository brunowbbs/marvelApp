import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Details, Home } from '../../src/screens';
import { Search } from '../screens/Search';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const options = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({ current: { progress } }: any) => {
    return {
      cardStyle: {
        opacity: progress
      }
    };
  }
};

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
          cardStyle: {
            backgroundColor: '#FFF',
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} options={() => options} />
        <Stack.Screen name="Details"
          component={Details}
          options={() => options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}