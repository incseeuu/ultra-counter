import React, {ChangeEvent} from 'react';
import classes from './UltraInput.module.css'
import {start} from "repl";

type PropsType = {
    id: number
    onChangeMaxValue?: (value: string, id: number) => void
    onChangeStartValue?: (value: string, id: number) => void
    startValue?: number
    maxValue?: number
    classNameStartValueInput?: boolean
    classNameMaxValueInput?: boolean
}

const UltraInput = (props: PropsType) => {

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>, id: number) => {
        props.onChangeMaxValue && props.onChangeMaxValue(e.currentTarget.value, id)
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>, id: number) => {
        props.onChangeStartValue && props.onChangeStartValue(e.currentTarget.value, id)
    }

    const finalClassName = classes.ultraInput
        + ( props.classNameStartValueInput ? ' ' + classes.errorInput
            : props.classNameMaxValueInput ? ' ' + classes.errorInput : '')

    const values = (id: number) => {
        return id === 1 ? props.maxValue : props.startValue
    }

    return (
        <>
            <input
                value={values(props.id)}
                onChange={(e) => {
                onChangeMaxValue(e, props.id);
                onChangeStartValue(e, props.id)
            }}
                   className={finalClassName} type={"number"}/>
        </>
    );
};

export default UltraInput;