import React from 'react'
import PhoneInput from 'react-phone-number-input'
import StartTrial from './Components/Form/StartTrial'
import HiddenCaptcha from './Components/Utils/HiddenRecaptcha'
import SelectCountryCode from "./Form"

import "./style.scss"
import "style.css"

const App = () => {
	return (
		<div className="App">
			<StartTrial>
				<HiddenCaptcha />
			</StartTrial>
			
		
		</div>
	)
	}

  export default App
