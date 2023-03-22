import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {loadState, saveState} from "../utils/localStorage";

export type AppStateType = ReturnType<typeof RootReducer>

const RootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(RootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});

export const useCounterSelector: TypedUseSelectorHook<AppStateType> = useSelector


