import React, {Component} from 'react';
import './App.css';
import Timers from "./Components/Timer/timers";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Timers startTime="30" autoStart="true"/>
                <Timers startTime="60" speedTime="2000"/>
            </div>
        );
    }
}

export default App;
