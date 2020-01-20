import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    ContainerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    HeaderView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    InputView: {
        flex: 1,
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
        padding: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 5,
    },
    HeaderText: {
        fontSize: 50,
        fontWeight: 'bold',
        paddingBottom: 10,
        borderBottomWidth: 5,
    },
    ContentView: {
        flex: 4,
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
        flex: 4,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    ListText: {
        fontSize: 17,
    },
    RemoveView: {
        flex: 1,
    },
    RemoveText: {
        marginLeft: 5,
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        textAlign: 'center',
    },
    ListDoneText: {
        textDecorationLine: 'line-through',
    },
});
