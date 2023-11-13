import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 40,
        marginTop: 100
    },
    textAcc: {
        color: '#009E60',
        marginTop: 85,
        fontSize: 23,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 19,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 15,
        borderRadius: 7,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#009E60',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 175
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },
    textGreen: {
        marginTop: 12,
        color: '#009E60',
        fontSize: 16,
        fontWeight: 'bold'
    },
});