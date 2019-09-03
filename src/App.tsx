import * as React from "react"
import { Component } from 'react'
import './App.css'
import * as logo from './logo.svg'
import { JsxTester } from './Tester'

import styled from 'styled-components'

let x: number = 'notanumber'

let StyledTester = styled.div`
    background: skyblue;
    border: 5px solid green;
`

import{IReExportedType, TypesTester} from './type-exports'

type P = IReExportedType & React.HTMLProps<any>

let MyPointlessWrapper = (props: P) => {
    return <TypesTester {...props}>
        re-exporting types works
    </TypesTester>
}

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
                <MyPointlessWrapper bg='green'/>
            </div>
        )
    }
}

export default App
