import React from 'react';
import './App.css';
import Main from "./Components/Main/Main";
import Settings from "./Components/Settings/Settings";

function App() {




    // useEffect(() => {
    //     let startValue = localStorage.getItem('startValue')
    //     let maxValue = localStorage.getItem('maxValue')
    //     if (startValue) {
    //         const newValue = JSON.parse(startValue)
    //         setStartValue(newValue)
    //         setCountState(newValue)
    //     }
    //     if (maxValue) {
    //         const newMaxValue = JSON.parse(maxValue)
    //         setMaxValue(newMaxValue)
    //     }
    // }, [])

    return (
        <div className="app">
            <span className="title">Welcome :)</span>
            <Main/>
            <Settings/>
        </div>
    );
}

export default App;
