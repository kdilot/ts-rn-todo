import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import S from './styles';
import { useTodo } from '@hook/useTodo';
import { useReducerState } from '@hook/useReducerState';

const MainScreen = () => {
    const { useTodoState } = useReducerState();
    const { todo } = useTodoState;
    const { useAddTodo, useStatusTodo, useRemoveTodo } = useTodo();
    const [inputValue, setInputValue] = React.useState<string>(null);

    const onAdd = (value: string) => {
        useAddTodo({ title: value, isDone: false });
        setInputValue(null);
    };

    const onStatus = (item: object) => {
        const { title, isDone }: any = item;
        useStatusTodo({ title, isDone: !isDone });
    };

    const onRemove = (index: number) => {
        useRemoveTodo(index);
    };

    return (
        <View style={S.ContainerView}>
            <View style={S.HeaderView}>
                <Text style={S.HeaderText}>TODO</Text>
            </View>
            <View style={S.InputView}>
                <TextInput style={S.InputBox} value={inputValue} onChangeText={inputValue => setInputValue(inputValue)} />
                <TouchableOpacity activeOpacity={0.7} onPress={() => onAdd(inputValue)}>
                    <Text style={S.InputText}>ADD</Text>
                </TouchableOpacity>
            </View>
            <View style={S.ContentView}>
                <FlatList
                    data={todo}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }: any) => (
                        <View style={S.ListView}>
                            <TouchableOpacity style={S.ListTextView} onPress={() => onStatus(item)}>
                                <Text style={[S.ListText, item.isDone && S.ListDoneText]}>{item.title}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={S.RemoveView} onPress={() => onRemove(index)}>
                                <Text style={[S.RemoveText]}>remove</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

export default MainScreen;
