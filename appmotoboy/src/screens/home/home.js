import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('EntregaScreen')}>
                <Text style={styles.text}>Entregas</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;