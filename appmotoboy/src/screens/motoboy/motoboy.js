import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles'
import MotoboyPedidos from '../../components/itens/index';

const EntregaScreen = ({ navigation }) => {

    const uri = 'http://localhost:3000/motoboy';
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        fetch(uri + '/entrega', { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                setPedidos(data);
            });
    }, []);

    const concluirEntrega = (id) => {
        const corpo = {
            id: id,
        }

        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(corpo)
        };

        fetch(uri, options)
            .then(resp => resp.status)
            .then(data => {
                if (data = 202) {
                    navigation.navigate('EntregaScreen')
                } else {
                    alert('Erro ao concluir Entrega!')
                }
            });
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={pedidos}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.pedido}>
                        <Text style={styles.text}>Id: {item.id}</Text>
                        <Text style={styles.text}>
                            Data: {item.dataPedido.toString().slice(0, 10) + " "}
                            Hora: {item.dataPedido.toString().slice(11, 16)}
                        </Text>
                        <MotoboyPedidos item={item.itens} />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => concluirEntrega(item.id)}
                        >
                            <Text style={styles.buttonText}>Concluir Entrega</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

export default EntregaScreen;