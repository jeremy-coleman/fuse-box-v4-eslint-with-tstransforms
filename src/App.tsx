import * as React from "react"
import { Component } from 'react'
import './App.css'
import * as logo from './logo.svg'
import { JsxTester } from './Tester'

import styled from 'styled-components'

let StyledTester = styled.div`
    background-color: 'red';
    border: 5px solid green;
`

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React!</h2>
                </div>
                <p className="App-intro">
                    To get started, edit
                    <code>src/App.js</code>
                    and save to reload.
                </p>
                <JsxTester/>
                <StyledTester>styled transform works(see dist/_somehash_app.js)</StyledTester>
            </div>
        )
    }
}

export default App
