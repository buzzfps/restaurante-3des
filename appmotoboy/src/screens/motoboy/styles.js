import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7472cc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pedido: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 10,
        margin: 20,
        width: 350,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    button: {
        height: 42,
        backgroundColor: '#c1edad',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    }
});

export default styles;