import { useDispatch } from 'react-redux';
import { setTodo, addTodo, statusTodo, removeTodo } from '@reducer/TodoReducer';
import { useCallback } from 'react';

export const useTodo = () => {
    const dispatch = useDispatch();
    const useSetTodo = useCallback((value: any) => dispatch(setTodo(value)), [dispatch]);
    const useAddTodo = useCallback((value: object) => dispatch(addTodo(value)), [dispatch]);
    const useStatusTodo = useCallback((value: object) => dispatch(statusTodo(value)), [dispatch]);
    const useRemoveTodo = useCallback((index: number) => dispatch(removeTodo(index)), [dispatch]);

    return { useSetTodo, useAddTodo, useStatusTodo, useRemoveTodo };
};

export default { useTodo };
