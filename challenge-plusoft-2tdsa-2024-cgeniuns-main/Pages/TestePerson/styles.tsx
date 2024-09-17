import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 10,
    },
    header: {
        alignItems: 'center',
        marginTop: 40,
    },
    headerText: {
        color: '#A99EDE',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 50,
    },
    scrollView: {
        borderWidth: 1,
        borderColor: '#6A2B75',
        margin: 10,
        borderRadius: 10,
        height: 900,
        marginTop: 30,
    },
    questionContainer: {
        padding: 10,
    },
    questionWrapper: {
        alignItems: 'center',
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        flex: 1,
    },
    questionNumber: {
        color: '#850F98',
        fontSize: 45,
    },
    questionText: {
        color: '#A187A6',
        fontSize: 20,
        marginLeft: 20,
        textAlign: 'justify',
        width: 290,
    },
    radioButtonGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioButtonText: {
        color: '#A187A6',
    },
    button: {
        marginTop: 30,
    
        borderRadius: 10,
        width: 200,
        height: 40,
        backgroundColor: '#850F98',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
    },
    buttonText: {
        color: '#A187A6',
        fontSize: 20,
    },
});
