import React from "react"
import PhoneInput from "react-phone-number-input"
import useForm, { FormContext, useFormContext } from "react-hook-form"

import axios from "axios"




/*removed this from list due to current incompat w/ plivo
<!--<option value="CN">China</option>-->
<!--<option value="PH">Philippines</option>-->
<!--<option value="ID">Indonesia</option>-->
<!--<option value="MY">Malaysia</option>-->
*/
/**
 * TODO-later => Separate into reusable components
 * inline form validation from react-hook-form
 *
 * @export StartTrial()
 * @returns form && @data = {
 *     name,
 *     email,
 *     password,
 *     countryCode,
 *     phoneNumber,
 *     ipAddress
 *   }
 */
/* //TODO componentDidMount aka when app loads --> return an IP address from ipify.org w/ axios
/* //TODO https://ipifiy.org/somejsonuri to get cx ipAddress
/* //TODO axios fetch of functions.php w/ ipAddress to set default select option
/* //NOTE return onSubmit form data */
//insert axios fetch of ipifiy.org here
//TODO insert axios post here and rm alert
//TODO pass data, ip to database w/ axios
//TODO-maybe => add {value: "someRegExp", message: "string"}

function StartTrial() {
  const { register, errors, handleSubmit, setValue } = useForm();
  const methods = () => useFormContext
/*   var customerData = {
    name: data.name,
    email: data.email,
    password: data.password,
    country: data.countryCode,
    phone: data.phoneNumber
  } */
//NOTE used to send customer data to db

//retrieve data onSubmit 
   
      
  const onSubmit = handleSubmit( data =>
  {
    console.log( data )
    console.log( errors )
      function sendCustomerData ()
  {
    axios( {
      method: "post",
      url: kixie.domain + "/rest/functions.php",
      cache: false,
      data: {}
    } )
  }
  }
  );
  const getIpAddress = () => {
    axios( {
      method: 'get',
      url: 'https://api.ipify.org?format=json',
      responseType: 'json',
      response: {
        ip: {ipAddress}
      }
    }).then( response.ip => {
       
     })
  }

/*   const componentDidMount = () => getCountryCode( getIpAddress() ) */
    
  //TODO findout what kixie.domain means
  function setCountryCode(ipAddress) {
      axios
          .get( {
      url: kixie.domain + "/rest/functions.php",
      cache: false,
      params: {
        call: "getIPdetails",
        ip: ipAddress
      }
    })
}
  
  return (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            ref={register({
              required: true,
              min: 4,
              maxLength: 80,
              pattern: /\D/i
            })}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            ref={register({ required: true, min: 6 })}
          />
          <SelectCountryCode defaultCountryId={setValue('GottaAddSomeStuff')} defaultCountry={setValue('GottaAddSomeStuff')} />
          <PhoneInput
            placeholder="Enter Phone Number"
            name="phone"
            value={this.state.value}
            onChange={value => this.setState({ value })}
            ref={register({
              required: true,
              message: "Phone Number is Required"
            })}
          />{" "}
          {errors.PhoneInput && <p>{errors.PhoneInput.message}</p>}
          <button type="submit" />
        </form>
  )
}
export default StartTrial()