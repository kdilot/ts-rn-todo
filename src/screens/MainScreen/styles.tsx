import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    ContainerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    HeaderView: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 3,
    },
    InputView: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    InputBox: {
        width: '80%',
        height: 40,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 10,
    },
    InputText: {
        fontSize: 20,
        padding: 3,
        paddingHorizontal: 10,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 5,
    },
    HeaderText: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    ContentView: {
        flex: 6,
        padding: 10,
        width: '100%',
    },
    ListView: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    ListTextView: {
        flexDirection: 'row',
        flex: 4,
        paddingLeft: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    ListText: {
        paddingLeft: 10,
        fontSize: 17,
    },
    RemoveView: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 10,
    },
    ListDoneText: {
        textDecorationLine: 'line-through',
    },
});
