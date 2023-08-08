import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <TouchableOpacity
                style={style.button}
                onPress={() => navigation.navigate('PedidoScreen')}>
                <Text>Pedidos</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;