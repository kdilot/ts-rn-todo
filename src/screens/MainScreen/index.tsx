import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import S from './styles';
import { useTodoState, useAddTodo, useStatusTodo, useRemoveTodo } from '@hook/useTodo';

const MainScreen = () => {
    const todoList = useTodoState().todo;
    const addTodo = useAddTodo();
    const statusTodo = useStatusTodo();
    const removeTodo = useRemoveTodo();
    const [inputValue, setInputValue] = React.useState<string>(null);

    const onAdd = (value: string) => {
        addTodo({ title: value, isDone: false });
        setInputValue(null);
    };

    const onStatus = (item: object) => {
        const { title, isDone }: any = item;
        statusTodo({ title, isDone: !isDone });
    };

    const onRemove = (index: number) => {
        removeTodo(index);
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
                    data={todoList}
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
