import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntregaScreen from './src/screens/motoboy';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="EntregaScreen"
          component={EntregaScreen}
          options={{ title: 'Motoboy' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}