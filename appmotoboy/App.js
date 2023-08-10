import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home/home';
import EntregaScreen from './src/screens/motoboy/motoboy';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="EntregaScreen"
          component={EntregaScreen}
          options={{ title: 'Pedidos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}