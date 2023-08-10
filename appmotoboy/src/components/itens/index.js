import { View, Text, FlatList } from 'react-native';
import styles from './styles'

export default function MotoboyPedidos({ item }) {
    return (
        <FlatList
            data={item}
            renderItem={({ item }) => (
                <View style={styles.pedido}>
                    <Text style={styles.text}>Nome: {item.nome}</Text>
                    <Text style={styles.text}>Placa: {item.motoboy.placa}</Text>
                    <Text style={styles.text}>Modelo: {item.motoboy.modelo}</Text>

                </View>
            )}
        />
    )
}