import React, {useEffect} from 'react';
import classes from "./Settings.module.css";
import UltraInput from "../UltraInput/UltraInput";
import UltraButton from "../UltraButton/UltraButton";
import {useCounterSelector} from "../../bll/store";
import {
    changeCurrentCountValue,
    changeMaxValue,
    changeStartValue,
    CounterStateType,
    toggleSetting
} from "../../bll/counterReducer";
import {useDispatch} from "react-redux";


const Settings = () => {
    const {
        startValue,
        maxValue,
        openSettings
    } = useCounterSelector<CounterStateType>(state => state.counter)
    const dispatch = useDispatch()
    console.log(openSettings)

    const onChangeMaxValue = (value: string, id: number) => {
        id === 1 && dispatch(changeMaxValue(Number(value)))
    }

    const onChangeStartValue = (value: string, id: number) => {
        id === 2 && dispatch(changeStartValue(Number(value)))
    }

    const onClickOpenSettings = () => {
        dispatch(toggleSetting(!openSettings))
        dispatch(changeCurrentCountValue(startValue))
    }

    const disablesSetButton = () => {
        return startValue < 0 || maxValue <= startValue
    }

    const classNameStartValueInput = startValue < 0
    const classNameMaxValueInput = maxValue <= startValue


    const classNameStartValue = classes.text + (startValue < 0 ? ' ' + classes.errorText : '')
    const classNameMaxValue = classes.text + (maxValue <= startValue ? ' ' + classes.errorText : '')

    return (
        <div className={classes.main}>
            <div className={classes.topContainer}>
                <div className={classes.maxValue}>
                    <span
                        className={classNameMaxValue}>{maxValue <= startValue ? "max value should be > start value" : "max value:"}</span>
                    <div className={classes.input}>
                        <UltraInput
                            id={1}
                            onChangeMaxValue={onChangeMaxValue}
                            maxValue={maxValue}
                            classNameMaxValueInput={classNameMaxValueInput}
                        />
                    </div>
                </div>
                <div className={classes.startValue}>
                    <span
                        className={classNameStartValue}>{startValue < 0 ? "start value can't be < 0" : "start value:"}</span>
                    <div className={classes.input}>
                        <UltraInput
                            id={2}
                            onChangeStartValue={onChangeStartValue}
                            startValue={startValue}
                            classNameStartValueInput={classNameStartValueInput}
                        />
                    </div>
                </div>
            </div>
            <div className={classes.bottomContainer}>
                <UltraButton
                    title={'set'} id={4}
                    onClickOpenSettings={onClickOpenSettings}
                    disabledSet={disablesSetButton}
                />
            </div>
        </div>
    );
};

export default Settings;