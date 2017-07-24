"use strict";

import React from 'react'; 
import ReactDOM from 'react-dom';
import Config   from './assets/Config';
import DayLog from './components/DayLog';
import Pomodoro from './components/Pomodoro';

ReactDOM.render(
        <div>
            <Pomodoro/>
            <DayLog/>
        </div>,
    document.getElementById("app")
)