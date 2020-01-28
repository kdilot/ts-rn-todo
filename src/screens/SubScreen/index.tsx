import * as React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import S from './styles';
import { useReducerState } from '@hook/useReducerState';

const SubScreen = () => {
    const { useTodoState } = useReducerState();
    const { todo } = useTodoState;

    return (
        <SafeAreaView style={S.ContainerView}>
            <FlatList
                data={todo}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={() => <View style={S.DivierView} />}
                ItemSeparatorComponent={() => <View style={S.DivierView} />}
                renderItem={({ item }) => (
                    <View style={S.ListView}>
                        <Text style={[S.ListText, item.isDone && S.ListDoneText]}>{item.title}</Text>
                        <Text style={[S.ListText, S.ListDateText]}>{item.date}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default SubScreen;
