import React from 'react';
import classes from "./UltraButton.module.css"

type PropsType = {
    title: string
    id: number
    onClickCountAddHandler?: (id: number) => void
    onClickCountResetHandler?: (id: number) => void
    onClickOpenSettings?: (id: number) => void
    disabledInc?: boolean
    disabledSet?: () => boolean
}

const UltraButton = (props: PropsType) => {

    const onClickCountHandler = (id: number) => {
        props.onClickCountAddHandler && props.onClickCountAddHandler(id)
    }

    const onClickCountResetHandler = (id: number) => {
        props.onClickCountResetHandler && props.onClickCountResetHandler(id)
    }

    const onClickOpenSettings = (id: number) => {
        props.onClickOpenSettings && props.onClickOpenSettings(id)
    }

    const disabled = () => {
        if(props.id === 4){
            if(props.disabledSet ){
                return props.disabledSet()
            }
        }
        if(props.id === 1){
            return props.disabledInc
        }
    }

    const classNameButton = classes.button
        +(disabled() ? ' ' + classes.disabled : '')

    return (
        <>
            <button
                disabled={disabled()}
                className={classNameButton}
                onClick={() =>
                {
                    onClickCountHandler(props.id);
                    onClickCountResetHandler(props.id);
                    onClickOpenSettings(props.id)
                } }
            >{props.title}</button>
        </>
    );
};

export default UltraButton;