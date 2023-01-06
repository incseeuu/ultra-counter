import React, {useEffect} from 'react';
import classes from "./Settings.module.css";
import UltraInput from "../UltraInput/UltraInput";
import UltraButton from "../UltraButton/UltraButton";

type SettingsType = {
    openSettings: boolean
    setOpenSettings: (openSettings: boolean) => void
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
    setCountState: (countState: number) => void
}

const Settings = (props: SettingsType) => {

    const onChangeMaxValue = (value: string, id: number) => {
        localStorage.setItem('maxValue', value)
        id === 1 && props.setMaxValue(Number(value))
    }

    const onChangeStartValue = (value: string, id: number) => {
        localStorage.setItem('startValue', value)
        id === 2 && props.setStartValue(Number(value))
    }

    const onClickOpenSettings = () => {
        props.setOpenSettings(!props.openSettings)
        props.setCountState(props.startValue)
    }

    const disablesSetButton = () => {
        return props.startValue < 0 || props.maxValue <= props.startValue
    }

    const classNameStartValueInput = props.startValue < 0
    const classNameMaxValueInput = props.maxValue <= props.startValue


    const classNameStartValue = classes.text + (props.startValue < 0 ? ' ' + classes.errorText : '')
    const classNameMaxValue = classes.text + (props.maxValue <= props.startValue ? ' ' + classes.errorText : '')

    return (
        <div className={classes.main}>
            <div className={classes.topContainer}>
                <div className={classes.maxValue}>
                    <span className={classNameMaxValue}>{props.maxValue <= props.startValue ? "max value should be > start value" : "max value:"}</span>
                    <div className={classes.input}>
                        <UltraInput
                            id={1}
                            onChangeMaxValue={onChangeMaxValue}
                            maxValue={props.maxValue}
                            classNameMaxValueInput={classNameMaxValueInput}
                        />
                    </div>
                </div>
                <div className={classes.startValue}>
                    <span className={classNameStartValue}>{props.startValue < 0 ? "start value can't be < 0" : "start value:"}</span>
                    <div className={classes.input}>
                        <UltraInput
                            id={2}
                            onChangeStartValue={onChangeStartValue}
                            startValue={props.startValue}
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