import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const MODIFY_STATE = "MODIFY_STATE"

const modifyState = createAction(MODIFY_STATE)
const initialState = {
    stateName: 0
}

const stateReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(modifyState, (state) => {
            state.stateName++;
        })
})

export const store = configureStore({ reducer: stateReducer })