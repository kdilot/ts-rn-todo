import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@reducers';
import { addTodo, statusTodo, removeTodo } from '@reducer/TodoReducer';
import { useCallback } from 'react';

export const useAddTodo = () => {
    const dispatch = useDispatch();
    return useCallback(value => dispatch(addTodo(value)), [dispatch]);
};

export const useStatusTodo = () => {
    const dispatch = useDispatch();
    return useCallback(value => dispatch(statusTodo(value)), [dispatch]);
};

export const useRemoveTodo = () => {
    const dispatch = useDispatch();
    return useCallback(index => dispatch(removeTodo(index)), [dispatch]);
};

export const useTodoState = () => {
    return useSelector((state: RootState) => state.TodoReducer);
};

export default { useAddTodo, useTodoState, useRemoveTodo };
