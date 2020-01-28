import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    ContainerView: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
    },
    ListView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ListText: {
        flex: 8,
        margin: 5,
        fontSize: 17,
    },
    ListDateText: {
        flex: 2,
        textAlign: 'right',
    },
    DivierView: {
        borderWidth: 1,
        borderColor: 'gray',
    },
    ListDoneText: {
        textDecorationLine: 'line-through',
    },
});
