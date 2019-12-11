/** @format */

import React from 'react';
import ReactDOM from 'react-dom'
import useForm from 'use-form'
import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-v3';

const HiddenDiv = () => {
  return <i>{ '' }<i/>;
  
  }


const HiddenRecaptcha = () => {

  
      componentDidMount( loadReCaptcha( 'Le8J7EUAAAAAIWsoUX28kha-XGaNUcTcafUgDtu' ) )
    verifyCallback = (recaptchaToken) => {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken);
}
  
  return (
    <HiddenDiv>
      <ReCaptcha
        sitekey='Le8J7EUAAAAAIWsoUX28kha-XGaNUcTcafUgDtu'
        action='action_name'
        verifyCallback={this.verifyCallback}
      />
    </HiddenDiv>
  )
}

export default HiddenRecaptcha;
