import React from 'react';
import classes from "./Main.module.css";
import UltraButton from "../UltraButton/UltraButton";
import {useCounterSelector} from "../../bll/store";
import {changeCurrentCountValue, CounterStateType, toggleSetting} from "../../bll/counterReducer";
import {useDispatch} from "react-redux";

type ButtonType = {
    id: number
    title: string
}

const Main = () => {
    const {
        countState,
        startValue,
        maxValue,
        openSettings
    } = useCounterSelector<CounterStateType>(state => state.counter)
    const dispatch = useDispatch()

    const buttonState: ButtonType[] = [
        {id: 1, title: 'inc'},
        {id: 2, title: 'reset'},
        {id: 3, title: 'settings'},
    ]


    const onClickCountAddHandler = (buttonId: number) => {
        buttonId === 1 && dispatch(changeCurrentCountValue(Number(countState) + 1))
    }

    const onClickCountResetHandler = (buttonId: number) => {
        buttonId === 2 && dispatch(changeCurrentCountValue((startValue)))
    }

    const onClickOpenSettings = (buttonId: number) => {
        buttonId === 3 && dispatch(toggleSetting((!openSettings)))
    }

    const disabledInc = () => {
        return countState === maxValue
    }

    const settingsClassname = classes.main + (openSettings ? ' ' + classes.active : '')

    const countLimitClassName = classes.counter + (disabledInc() ? ' ' + classes.counterLimit : '')

    const mappingButton = buttonState
        .map(el => {

            return (
                <UltraButton key={el.id}
                             id={el.id}
                             disabledInc={disabledInc()}
                             title={el.title}
                             onClickCountAddHandler={onClickCountAddHandler}
                             onClickCountResetHandler={onClickCountResetHandler}
                             onClickOpenSettings={onClickOpenSettings}
                />
            )
        })

    return (
        <div className={settingsClassname}>
            <div className={classes.topContainer}>
                <span className={countLimitClassName}>{countState}</span>
            </div>
            <div className={classes.bottomContainer}>
                {mappingButton}
            </div>
        </div>
    );
};

export default Main;