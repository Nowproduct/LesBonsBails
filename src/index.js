import ReactDOM from 'react-dom'
import React from 'react' // eslint-disable-line no-unused-vars
import './index.css'
import App from './App' // eslint-disable-line no-unused-vars
import * as serviceWorker from './serviceWorker'
// import index from "./js/index"

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
