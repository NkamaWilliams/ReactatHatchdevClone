import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

export interface Todo {
    id: number, 
    text: string,
    completed: boolean
}

export interface Todos {
    todos: Todo[],
    filter: "ALL" | "ACTIVE" | "COMPLETED",
    counter: number
}

const initialState: Todos = {
    todos: [],
    counter: 1, 
    filter: "ALL"
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        /**
         * Marks the todo with given id as completed
         * @param state 
         * @param action 
         */
        completed: (state, action: PayloadAction<Pick<Todo, "id">>) => {
            let todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        add: (state, action: PayloadAction<Pick<Todo, "text">>) => {
            state.todos.push({id: state.counter, text: action.payload.text, completed: false});
            state.counter += 1;
        }
    }
});

export const { completed, add } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todo.todos;