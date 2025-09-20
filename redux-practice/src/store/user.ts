import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
export interface User {
    name: string,
    age: number,
    email: string,
    isVerified: boolean
};

// Pick, Omit
export type BaseUser = Omit<User, "isVerified">;

const initialUser: User = {
    name: "User",
    age: 0,
    email: "",
    isVerified: false
};

const userSlice = createSlice({
    name: "user",
    initialState: initialUser,
    reducers: {
        verify: (state) => {
            state.isVerified = true;
        },
        update: (state, action: PayloadAction<BaseUser>) => {
            state.name = action.payload.name;
        }
    }
})

export const { verify, update } = userSlice.actions;
export const selectUserState = (state: RootState) => state.user;

export default userSlice;