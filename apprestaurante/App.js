import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/home'
import PedidosScreen from './src/screens/pedidos'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Cozinha' }}
        />
        <Stack.Screen
          name="PedidosScreen"
          component={PedidosScreen}
          options={{ title: 'Pedidos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
