import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3E424B',
        padding: 70,
        paddingHorizontal: 30,
    },
    container1: {
        flex: 1,
    },
    title1: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        alignItems: 'center',
        alignSelf: 'center'
    },
    title2: {
        color: '#fff',
        fontSize: 13,
        alignItems: 'center',
        alignSelf: 'center'
    },
    textAcc: {
        marginTop: 50,
        fontSize: 11,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 13,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 15,
        borderRadius: 7
    },
    button: {
        backgroundColor: '#4443fa',
        padding: 11,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
    },
    textBlue: {
        marginTop: 12,
        color: '#088F8F',
        fontSize: 11
    },
});