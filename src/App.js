import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { BrowserRouter as Router, Route, /*Link*/ } from 'react-router-dom'
import './App.css'

import { RegisterPage } from '../src/Pages/RegisterPage/index'

const BasicRouter = () => (
	<Router>
	  <div>
		{/* <ul>
		  <li>
			<Link to="/">Login</Link>
		  </li>
		</ul> */}
		{/* <hr />   */}
		<Route exact path="/" component={RegisterPage} />
	  </div>
	</Router>
  )

  export default BasicRouter
