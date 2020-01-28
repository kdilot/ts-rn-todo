import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useTodo } from '@hook/useTodo';
import { useReducerState } from '@hook/useReducerState';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContext } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
        if (value) {
            const today = new Date();
            const month = today.getMonth() + 1;
            const day = today.getDate();
            const year = today
                .getFullYear()
                .toString()
                .slice(2.2);
            useAddTodo({ title: value, isDone: false, date: `${month}/${day}/${year}` });
            setInputValue(null);
        }
    };

    const onStatus = (item: object, index: number) => {
        const { title, isDone }: any = item;
        useStatusTodo({ title, isDone: !isDone, index });
    };

    const onRemove = (index: number) => {
        useRemoveTodo(index);
    };

    return (
        <SafeAreaView style={S.ContainerView}>
            <View style={S.HeaderView}>
                <Text style={S.HeaderText}>TODO</Text>
            </View>
            <View style={S.InputView}>
                <TextInput style={S.InputBox} value={inputValue} onChangeText={inputValue => setInputValue(inputValue)} />
                <TouchableOpacity style={S.InputText} activeOpacity={0.7} onPress={() => onAdd(inputValue)}>
                    <Ionicons name="ios-add" size={30} />
                </TouchableOpacity>
            </View>
            <View style={S.ContentView}>
                <FlatList
                    data={todo}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }: any) => (
                        <View style={S.ListView}>
                            <TouchableOpacity style={S.ListTextView} onPress={() => onStatus(item, index)}>
<<<<<<< HEAD
>>>>>>> 94ec1c8805b2a5dec3b3993e33927ae2fda4905e
=======
                                <Ionicons name="ios-checkbox-outline" size={30} color={item.isDone ? 'green' : 'gray'} />
>>>>>>> b437597... todo
                                <Text style={[S.ListText, item.isDone && S.ListDoneText]}>{item.title}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={S.RemoveView} onPress={() => onRemove(index)}>
                                <Ionicons name="md-trash" size={30} />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

export default MainScreen;
