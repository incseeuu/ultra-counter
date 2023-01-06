import React from 'react';
import classes from "./Main.module.css";
import UltraButton from "../UltraButton/UltraButton";

type ButtonType = {
    id: number
    title: string
}

type MainType = {
    openSettings: boolean
    setOpenSettings: (openSettings: boolean) => void
    maxValue: number
    startValue: number
    countState: number
    setCountState: (countState: number) => void
}

const Main = (props: MainType) => {

    const buttonState: ButtonType[] = [
        {id: 1, title: 'inc'},
        {id: 2, title: 'reset'},
        {id: 3, title: 'settings'},
    ]



    const onClickCountAddHandler = (buttonId: number) => {
        buttonId === 1 && props.setCountState(Number(props.countState) + 1)
    }

    const onClickCountResetHandler = (buttonId: number) => {
            buttonId === 2 && props.setCountState(props.startValue)
    }

    const onClickOpenSettings = (buttonId: number) => {
        buttonId === 3 && props.setOpenSettings(!props.openSettings)
    }

    const disabledInc = () => {
        return props.countState === props.maxValue
    }

    const settingsClassname = classes.main + (props.openSettings ? ' ' + classes.active : '')

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
                <span className={countLimitClassName}>{props.countState}</span>
            </div>
            <div className={classes.bottomContainer}>
                {mappingButton}
            </div>
        </div>
    );
};

export default Main;