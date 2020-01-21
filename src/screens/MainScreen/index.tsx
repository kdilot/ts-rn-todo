import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useTodo } from '@hook/useTodo';
import { useReducerState } from '@hook/useReducerState';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContext } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import Icons from '@asset/fonts/selection.json';
import MyIcon from 'react-native-custom-icon';
import S from './styles';

const MainScreen = () => {
    const { useTodoState } = useReducerState();
    const { todo } = useTodoState;
    const { useAddTodo, useStatusTodo, useRemoveTodo } = useTodo();
    const [inputValue, setInputValue] = React.useState<string>(null);
    const navigation = React.useContext(NavigationContext);

    React.useEffect(() => {
        const willBlurListener = navigation.addListener('willBlur', () => {
            AsyncStorage.setItem('todo', JSON.stringify(todo));
        });

        return () => {
            willBlurListener.remove();
        };
    });

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
        <SafeAreaView style={S.ContainerView}>
            <View style={S.HeaderView}>
                <Text style={S.HeaderText}>TODO</Text>
                <MyIcon name="sample2" size={40} config={Icons} />
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
        </SafeAreaView>
    );
};

export default MainScreen;
