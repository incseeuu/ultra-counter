import React, {useEffect} from 'react';
import './App.css';
import Main from "./Components/Main/Main";
import Settings from "./Components/Settings/Settings";

function App() {
    const [openSettings, setOpenSettings] = React.useState(false)
    const [startValue, setStartValue] = React.useState<number>(0)
    const [maxValue, setMaxValue] = React.useState<number>(0)
    const [countState, setCountState] = React.useState(startValue)

    useEffect(() => {
        let startValue = localStorage.getItem('startValue')
        let maxValue = localStorage.getItem('maxValue')
        if (startValue) {
            const newValue = JSON.parse(startValue)
            setStartValue(newValue)
            setCountState(newValue)
        }
        if (maxValue) {
            const newMaxValue = JSON.parse(maxValue)
            setMaxValue(newMaxValue)
        }
    }, [])

  /*   useEffect(() => {
         localStorage.setItem('startValue', JSON.stringify(startValue))
     }, [startValue])*/

    return (
        <div className="app">
            <span className="title">Welcome :)</span>
            <Main
                openSettings={openSettings}
                setOpenSettings={setOpenSettings}
                maxValue={maxValue}
                startValue={startValue}
                countState={countState}
                setCountState={setCountState}

            />
            <Settings
                openSettings={openSettings}
                setOpenSettings={setOpenSettings}
                startValue={startValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                setCountState={setCountState}
            />
        </div>
    );
}

export default App;
