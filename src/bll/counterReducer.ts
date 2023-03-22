export type CounterActionsType = ToggleSetting
    | ChangeStartValue
    | ChangeMaxValue
    | ChangeCurrentCountValue

type ToggleSetting = ReturnType<typeof toggleSetting>
type ChangeStartValue = ReturnType<typeof changeStartValue>
type ChangeMaxValue = ReturnType<typeof changeMaxValue>
type ChangeCurrentCountValue = ReturnType<typeof changeCurrentCountValue>

export type CounterStateType = {
    openSettings: boolean
    startValue: number
    maxValue: number
    countState: number
}

const initialState: CounterStateType = {
    openSettings: false,
    startValue: 0,
    countState: 0,
    maxValue: 0
}

export const counterReducer = (state = initialState, action: CounterActionsType) => {
    switch (action.type) {
        case "CURRENT-VALUE":
            return {...state, countState: action.value}
        case "TOGGLE-SETTINGS":
            return {...state, openSettings: action.value}
        case "MAX-VALUE":
            return {...state, maxValue: action.value}
        case "START-VALUE":
            return {...state, countState: action.value, startValue: action.value}
    }
    return state
}

export const toggleSetting = (value: boolean) => ({type: 'TOGGLE-SETTINGS', value} as const)
export const changeStartValue = (value: number) => ({type: 'START-VALUE', value} as const)
export const changeMaxValue = (value: number) => ({type: 'MAX-VALUE', value} as const)
export const changeCurrentCountValue = (value: number) => ({type: 'CURRENT-VALUE', value} as const)