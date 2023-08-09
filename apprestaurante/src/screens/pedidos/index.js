import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles'
import ItemPedido from '../../components/item';

const PedidosScreen = ({ navigation }) => {

    const uri = 'http://localhost:3000/pedido/cozinha';
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/pedido/cozinha', { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPedidos(data);
            });
    }, []);

    const concluirPedido = (id) => {
        const corpo = {
            id: id,
            dataCozinha: new Date()
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
                    navigation.navigate('HomeScreen')
                } else {
                    alert('Erro ao concluir pedido!')
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
                        <Text style={styles.text}>Hora: {item.dataPedido}</Text>
                        <ItemPedido item={item.itens} />
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Concluído</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

export default PedidosScreen;