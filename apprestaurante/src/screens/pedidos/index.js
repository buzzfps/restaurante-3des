import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const PedidosScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <Text>Pedidos</Text>
            <TouchableOpacity
                style={style.button}
                onPress={() => navigation.navigate('PedidoScreen')}>
                <Text>Pedidos</Text>
            </TouchableOpacity>
        </View>
    );
}

export default PedidosScreen;