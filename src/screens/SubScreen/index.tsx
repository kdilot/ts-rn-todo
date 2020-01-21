import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import S from './styles';
import { useReducerState } from '@hook/useReducerState';

const SubScreen = () => {
    const { useTodoState } = useReducerState();
    const { todo } = useTodoState;

    return (
        <View style={S.ContainerView}>
            <FlatList
                data={todo}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={() => <View style={S.DivierView} />}
                ItemSeparatorComponent={() => <View style={S.DivierView} />}
                renderItem={({ item }) => <Text style={S.ListText}>{item.title}</Text>}
            />
        </View>
    );
};

export default SubScreen;
