import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import S from './styles';
import { useTodoState } from '@hook/useTodo';

const SubScreen = () => {
    const todoList = useTodoState().todo;

    return (
        <View style={S.ContainerView}>
            <FlatList
                data={todoList}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={() => <View style={S.DivierView} />}
                ItemSeparatorComponent={() => <View style={S.DivierView} />}
                renderItem={({ item }) => <Text style={S.ListText}>{item.title}</Text>}
            />
        </View>
    );
};

export default SubScreen;
