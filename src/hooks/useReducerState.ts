import { useSelector } from 'react-redux';
import { RootState } from '@reducers';

export const useReducerState = () => {
    const useTodoState = useSelector((state: RootState) => state.TodoReducer);

    return { useTodoState };
};

export default { useReducerState };
