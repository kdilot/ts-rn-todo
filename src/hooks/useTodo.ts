import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@reducers';
import { addTodo, statusTodo, removeTodo } from '@reducer/TodoReducer';
import { useCallback } from 'react';

export const useTodo = () => {
    const dispatch = useDispatch();
    const useAddTodo = useCallback((value: object) => dispatch(addTodo(value)), [dispatch]);
    const useStatusTodo = useCallback((value: object) => dispatch(statusTodo(value)), [dispatch]);
    const useRemoveTodo = useCallback((index: number) => dispatch(removeTodo(index)), [dispatch]);

    return { useAddTodo, useStatusTodo, useRemoveTodo };
};

export const useTodoState = () => {
    return useSelector((state: RootState) => state.TodoReducer);
};

export default { useTodo, useTodoState };
