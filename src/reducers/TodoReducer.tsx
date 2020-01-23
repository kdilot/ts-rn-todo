import { createAction, ActionType, createReducer } from 'typesafe-actions';

import produce from 'immer';

//  Actions Type
export const SET = 'todo/SET';
export const ADD = 'todo/ADD';
export const CHANGE_STATUS = 'todo/CHANGE_STATUS';
export const REMOVE = 'todo/REMOVE';

//  Actions
export const setTodo = createAction(SET)<object>();
export const addTodo = createAction(ADD)<object>();
export const statusTodo = createAction(CHANGE_STATUS)<object>();
export const removeTodo = createAction(REMOVE)<number>();

// 모든 액션 생성함수들을 actions 객체로
const actions = {
    setTodo,
    addTodo,
    statusTodo,
    removeTodo,
};

// ActionType 를 사용하여 모든 액션 객체들의 타입을 준비
type TodoAction = ActionType<typeof actions>;

interface TodoState {
    todo: Array<{ title: string; isDone: boolean }>;
}

// Default State
const initialState: TodoState = {
    todo: [
        {
            title: 'Sample Todo1',
            isDone: false,
        },
    ],
};

const SettingReducer = createReducer<TodoState, TodoAction>(initialState, {
    [SET]: (state, action: any) =>
        produce(state, draft => {
            draft.todo = action.payload;
        }),
    [ADD]: (state, action: any) =>
        produce(state, draft => {
            draft.todo = state.todo.concat(action.payload);
        }),
    [CHANGE_STATUS]: (state, action: any) =>
        produce(state, draft => {
            const { title, isDone, index } = action.payload;
            const location = state.todo.findIndex((f, i) => f.title === title && i === index);
            draft.todo[location].isDone = isDone;
        }),
    [REMOVE]: (state, action) =>
        produce(state, draft => {
            draft.todo = state.todo.filter((f, i) => i !== action.payload);
        }),
});

export default SettingReducer;
