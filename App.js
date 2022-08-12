import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Don Bosco Image"  onPress={() => navigation.navigate('Details')} />
      <Button title="Don Bosco Video Prayer" onPress={() => navigation.navigate('DonBoscoPrayers')} />
    </View>
  );
}

function DetailsScreen({ navigation }) {
   const [count, setCount] = React.useState(0);

   return (
   
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Image source={require('./image/db.png')} />
      <Button title="Click Me" onPress={() => setCount((c) => c + 1)}title="Click me" />
    </View>
  );
}

function DonBoscoPrayers({ navigation }) {
   const [count, setCount] = React.useState(0);

   return (
   
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Image source={require('./image/videoplayback.mp4')} />
      <Button title="Click Me" onPress={() => setCount((c) => c + 1)}title="Click me" />
    </View>
  );
}




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="DonBoscoPrayers" component={DonBoscoPrayers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;