import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles'
import MotoboyPedidos from '../../components/itens/index';

const EntregaScreen = ({ navigation }) => {

    const uri = 'http://localhost:3000/pedido';
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        fetch(uri + '/entrega', { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                setPedidos(data);
            });
    }, []);

    const concluirEntrega = (id, clienteId) => {
        const corpo = {
            id: id,
            dataEntrega: new Date(),
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
                    alert('Erro ao concluir Entrega!')
                }
            });
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={pedidos}
                renderItem={({ item }) => (
                    <View style={styles.pedido}>
                        <Text style={styles.text}>Cliente: {item.cliente.nome}</Text>
                        <Text style={styles.text}>CEP: {item.cliente.enderecoCep}</Text>
                        <Text style={styles.text}>Número da casa: {item.cliente.enderecoNumero}</Text>
                        <Text style={styles.text}>Complemento: {item.cliente.enderecoComplemento}</Text>
                        <Text style={styles.text}>Valor total: R$ {item.valorPedido + item.valorEntrega}</Text>
                        <MotoboyPedidos item={item.itens} />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => concluirEntrega(item.id, item.clienteId)}
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