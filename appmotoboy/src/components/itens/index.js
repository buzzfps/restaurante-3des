import { View, Text, FlatList } from 'react-native';
import styles from './styles'

export default function MotoboyPedidos({ item }) {
    return (
        <FlatList
            data={item}
            renderItem={({ item }) => (
                <View style={styles.pedido}>
                    <Text style={styles.text}>{item.quantidade} {item.cardapio.produto}</Text>
                </View>
            )}
        />
    )
}