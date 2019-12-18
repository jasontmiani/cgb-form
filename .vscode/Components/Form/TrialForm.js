/**
 * @format prettier
 * @form @parms {name, email, password, phoneNumber, countryCode}
 * useForm() for form validation
 *for StandardHTML class="country-code"; for react className="countryCode"
 *var yeet = setEmail => {

 }
 * */
import React, { useState, useEffect } from "react";
import useForm, { useFormContext } from "react-hook-form";
import "./App.css";
import axios from "axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import 

/* window.kixie = {};
window.kixie.domain = "&lt;//qaapp.kixie.com&gt;"; */

//TODO: create function GetIPAddress() {axios.get(ipify.org)}

//TODO: test send data.newTrialUser w/ postman --> then to functions.php
/* export function AxiosPostRequest (data)
{
const data = (data) => {
  emailAddress: this.data.emailAddress,
  'emailAddress': `${ emailAddress }`
    JSON.parse( data )
    .then( data = { newTrialUser } ).then(
      console.log( 'INSERT_AXIOS_POST', newTrialUser )
    ).finally(
      console.log( newTrialUser )
    )
}

} */

/* window.kixie = {};
window.kixie.domain = "//app.kixie.com/";
window.kixie.env = "www";
const inlineAppID = "bmdpeakaalmaaflnkckhjcojpemlkjig";
window.kixie.download =
  "https://chrome.google.com/webstore/detail/" + inlineAppID;
window.kixie.pricing = "SOME_PRICING_DATA";



Form steps:
1. Form Loads
1.5 p clicks x 
2. Bside Loads

What actually occurs:
1. state = initialExitButton(X button) - has onClick event
2. onClick(e) => State =  {Load Form B Side}
3. if(state == Success(TrialForm) => SuccessBanner(TrialForm)
4. elseif(state == Success(StartTrialBSide) => SuccessBanner(StarTrialBSide)
5. elseif(state!== Success) => "Nothing"

//kixie.domain + "/rest/functions.php"
*/

export default function InitialTrialForm() {
  const { register, handleSubmit, errors } = useForm();

  const [getIp, setCountryCode] = useEffect(() => {
    getIp = () => axios.get( "https://api.ipify.org?format=json" );
    .then(
      axios.post()
    )
    return Response => {
      cleanup;
    };
  }, [input]);

  const onSubmit = data => {
    axios
      .post("https://af12ae6b-d335-47fe-987e-99bb4c1e36ae.mock.pstmn.io", data)
      .then(console.log(data, "yeet. you sent something!"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete='true'>
      <ul>
        <label className='form-label'>
          Name:
          <input
            name='fullName'
            label='Name:'
            type='text'
            placeholder='Enter Full Name'
            ref={register({
              required: true,
              min: 4,
              max: 80,
              pattern: /\D/i
            })}
          />
        </label>
        {errors.fullName && (
          <span class='error-message'>A valid full name is required.</span>
        )}
      </ul>
      <ul>
        <label className='form-label'>
          Email Address:
          <input
            type='email'
            placeholder='Email'
            name='emailAddress'
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            //*TODO: Check that RegEx works properly */
          />
          {errors.emailAddress && (
            <span class='error-message'>Email Address is Required!</span>
          )}
        </label>
      </ul>

      <ul>
        <label className='form-label'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            ref={register({ required: true, min: 6 })} //TODO define RegEx and/or imp module
          />
        </label>

        {errors.password && (
          <span class='error-message'>Password is required.</span>
        )}
      </ul>
      <ul>
        <label className='form-label'>
          Country:
          <select name='countryCode' ref={register({ required: true })}>
            <optgroup label='Order: By Frequently Used'>
              <option value='US'>United States</option>
              <option value='CA'>Canada</option>
              <option value='AU'>Australia</option>
              <option value='GB'>United Kingdom</option>
              <option value='DE'>Germany</option>
              <option value='MX'>Mexico</option>
              <option value='FR'>France</option>
              <option value='ES'>Spain</option>
              <option value='SG'>Singapore</option>
              <option value='JP'>Japan</option>
              <option value='BZ'>Brazil</option>
            </optgroup>
            <optgroup label='Order: Alphabetical'>
              <option value='AF'>Afghanistan</option>
              <option value='AX'>Åland Islands</option>
              <option value='AL'>Albania</option>
              <option value='DZ'>Algeria</option>
              <option value='AS'>American Samoa</option>
              <option value='AD'>Andorra</option>
              <option value='AO'>Angola</option>
              <option value='AI'>Anguilla</option>
              <option value='AQ'>Antarctica</option>
              <option value='AG'>Antigua and Barbuda</option>
              <option value='AR'>Argentina</option>
              <option value='AM'>Armenia</option>
              <option value='AW'>Aruba</option>
              <option value='AU'>Australia</option>
              <option value='AT'>Austria</option>
              <option value='AZ'>Azerbaijan</option>
              <option value='BS'>Bahamas</option>
              <option value='BH'>Bahrain</option>
              <option value='BD'>Bangladesh</option>
              <option value='BB'>Barbados</option>
              <option value='BY'>Belarus</option>
              <option value='BE'>Belgium</option>
              <option value='BZ'>Belize</option>
              <option value='BJ'>Benin</option>
              <option value='BM'>Bermuda</option>
              <option value='BT'>Bhutan</option>
              <option value='BO'>Bolivia, Plurinational State of</option>
              <option value='BQ'>Bonaire, Sint Eustatius and Saba</option>
              <option value='BA'>Bosnia and Herzegovina</option>
              <option value='BW'>Botswana</option>
              <option value='BV'>Bouvet Island</option>
              <option value='BR'>Brazil</option>
              <option value='IO'>British Indian Ocean Territory</option>
              <option value='BN'>Brunei Darussalam</option>
              <option value='BG'>Bulgaria</option>
              <option value='BF'>Burkina Faso</option>
              <option value='BI'>Burundi</option>
              <option value='KH'>Cambodia</option>
              <option value='CM'>Cameroon</option>
              <option value='CA'>Canada</option>
              <option value='CV'>Cape Verde</option>
              <option value='KY'>Cayman Islands</option>
              <option value='CF'>Central African Republic</option>
              <option value='TD'>Chad</option>
              <option value='CL'>Chile</option>
              <option value='CX'>Christmas Island</option>
              <option value='CC'>Cocos (Keeling) Islands</option>
              <option value='CO'>Colombia</option>
              <option value='KM'>Comoros</option>
              <option value='CG'>Congo</option>
              <option value='CD'>Congo, the Democratic Republic of the</option>
              <option value='CK'>Cook Islands</option>
              <option value='CR'>Costa Rica</option>
              <option value='CI'>Côte d'Ivoire</option>
              <option value='HR'>Croatia</option>
              <option value='CU'>Cuba</option>
              <option value='CW'>Curaçao</option>
              <option value='CY'>Cyprus</option>
              <option value='CZ'>Czech Republic</option>
              <option value='DK'>Denmark</option>
              <option value='DJ'>Djibouti</option>
              <option value='DM'>Dominica</option>
              <option value='DO'>Dominican Republic</option>
              <option value='EC'>Ecuador</option>
              <option value='EG'>Egypt</option>
              <option value='SV'>El Salvador</option>
              <option value='GQ'>Equatorial Guinea</option>
              <option value='ER'>Eritrea</option>
              <option value='EE'>Estonia</option>
              <option value='ET'>Ethiopia</option>
              <option value='FK'>Falkland Islands (Malvinas)</option>
              <option value='FO'>Faroe Islands</option>
              <option value='FJ'>Fiji</option>
              <option value='FI'>Finland</option>
              <option value='FR'>France</option>
              <option value='GF'>French Guiana</option>
              <option value='PF'>French Polynesia</option>
              <option value='TF'>French Southern Territories</option>
              <option value='GA'>Gabon</option>
              <option value='GM'>Gambia</option>
              <option value='GE'>Georgia</option>
              <option value='DE'>Germany</option>
              <option value='GH'>Ghana</option>
              <option value='GI'>Gibraltar</option>
              <option value='GR'>Greece</option>
              <option value='GL'>Greenland</option>
              <option value='GD'>Grenada</option>
              <option value='GP'>Guadeloupe</option>
              <option value='GU'>Guam</option>
              <option value='GT'>Guatemala</option>
              <option value='GG'>Guernsey</option>
              <option value='GN'>Guinea</option>
              <option value='GW'>Guinea-Bissau</option>
              <option value='GY'>Guyana</option>
              <option value='HT'>Haiti</option>
              <option value='HM'>Heard Island and McDonald Islands</option>
              <option value='VA'>Holy See (Vatican City State)</option>
              <option value='HN'>Honduras</option>
              <option value='HK'>Hong Kong</option>
              <option value='HU'>Hungary</option>
              <option value='IS'>Iceland</option>
              <option value='IN'>India</option>
              <option value='IR'>Iran, Islamic Republic of</option>
              <option value='IQ'>Iraq</option>
              <option value='IE'>Ireland</option>
              <option value='IM'>Isle of Man</option>
              <option value='IL'>Israel</option>
              <option value='IT'>Italy</option>
              <option value='JM'>Jamaica</option>
              <option value='JP'>Japan</option>
              <option value='JE'>Jersey</option>
              <option value='JO'>Jordan</option>
              <option value='KZ'>Kazakhstan</option>
              <option value='KE'>Kenya</option>
              <option value='KI'>Kiribati</option>
              <option value='KP'>Korea, Democratic People's Republic of</option>
              <option value='KR'>Korea, Republic of</option>
              <option value='KW'>Kuwait</option>
              <option value='KG'>Kyrgyzstan</option>
              <option value='LA'>Lao People's Democratic Republic</option>
              <option value='LV'>Latvia</option>
              <option value='LB'>Lebanon</option>
              <option value='LS'>Lesotho</option>
              <option value='LR'>Liberia</option>
              <option value='LY'>Libya</option>
              <option value='LI'>Liechtenstein</option>
              <option value='LT'>Lithuania</option>
              <option value='LU'>Luxembourg</option>
              <option value='MO'>Macao</option>
              <option value='MK'>
                Macedonia, the former Yugoslav Republic of
              </option>
              <option value='MG'>Madagascar</option>
              <option value='MW'>Malawi</option>
              <option value='MV'>Maldives</option>
              <option value='ML'>Mali</option>
              <option value='MT'>Malta</option>
              <option value='MH'>Marshall Islands</option>
              <option value='MQ'>Martinique</option>
              <option value='MR'>Mauritania</option>
              <option value='MU'>Mauritius</option>
              <option value='YT'>Mayotte</option>
              <option value='MX'>Mexico</option>
              <option value='FM'>Micronesia, Federated States of</option>
              <option value='MD'>Moldova, Republic of</option>
              <option value='MC'>Monaco</option>
              <option value='MN'>Mongolia</option>
              <option value='ME'>Montenegro</option>
              <option value='MS'>Montserrat</option>
              <option value='MA'>Morocco</option>
              <option value='MZ'>Mozambique</option>
              <option value='MM'>Myanmar</option>
              <option value='NA'>Namibia</option>
              <option value='NR'>Nauru</option>
              <option value='NP'>Nepal</option>
              <option value='NL'>Netherlands</option>
              <option value='NC'>New Caledonia</option>
              <option value='NZ'>New Zealand</option>
              <option value='NI'>Nicaragua</option>
              <option value='NE'>Niger</option>
              <option value='NG'>Nigeria</option>
              <option value='NU'>Niue</option>
              <option value='NF'>Norfolk Island</option>
              <option value='MP'>Northern Mariana Islands</option>
              <option value='NO'>Norway</option>
              <option value='OM'>Oman</option>
              <option value='PK'>Pakistan</option>
              <option value='PW'>Palau</option>
              <option value='PS'>Palestinian Territory, Occupied</option>
              <option value='PA'>Panama</option>
              <option value='PG'>Papua New Guinea</option>
              <option value='PY'>Paraguay</option>
              <option value='PE'>Peru</option>
              <option value='PN'>Pitcairn</option>
              <option value='PL'>Poland</option>
              <option value='PT'>Portugal</option>
              <option value='PR'>Puerto Rico</option>
              <option value='QA'>Qatar</option>
              <option value='RE'>Réunion</option>
              <option value='RO'>Romania</option>
              <option value='RU'>Russian Federation</option>
              <option value='RW'>Rwanda</option>
              <option value='BL'>Saint Barthélemy</option>
              <option value='SH'>
                Saint Helena, Ascension and Tristan da Cunha
              </option>
              <option value='KN'>Saint Kitts and Nevis</option>
              <option value='LC'>Saint Lucia</option>
              <option value='MF'>Saint Martin (French part)</option>
              <option value='PM'>Saint Pierre and Miquelon</option>
              <option value='VC'>Saint Vincent and the Grenadines</option>
              <option value='WS'>Samoa</option>
              <option value='SM'>San Marino</option>
              <option value='ST'>Sao Tome and Principe</option>
              <option value='SA'>Saudi Arabia</option>
              <option value='SN'>Senegal</option>
              <option value='RS'>Serbia</option>
              <option value='SC'>Seychelles</option>
              <option value='SL'>Sierra Leone</option>
              <option value='SG'>Singapore</option>
              <option value='SX'>Sint Maarten (Dutch part)</option>
              <option value='SK'>Slovakia</option>
              <option value='SI'>Slovenia</option>
              <option value='SB'>Solomon Islands</option>
              <option value='SO'>Somalia</option>
              <option value='ZA'>South Africa</option>
              <option value='GS'>
                South Georgia and the South Sandwich Islands
              </option>
              <option value='SS'>South Sudan</option>
              <option value='ES'>Spain</option>
              <option value='LK'>Sri Lanka</option>
              <option value='SD'>Sudan</option>
              <option value='SR'>Suriname</option>
              <option value='SJ'>Svalbard and Jan Mayen</option>
              <option value='SZ'>Swaziland</option>
              <option value='SE'>Sweden</option>
              <option value='CH'>Switzerland</option>
              <option value='SY'>Syrian Arab Republic</option>
              <option value='TW'>Taiwan, Province of China</option>
              <option value='TJ'>Tajikistan</option>
              <option value='TZ'>Tanzania, United Republic of</option>
              <option value='TH'>Thailand</option>
              <option value='TL'>Timor-Leste</option>
              <option value='TG'>Togo</option>
              <option value='TK'>Tokelau</option>
              <option value='TO'>Tonga</option>
              <option value='TT'>Trinidad and Tobago</option>
              <option value='TN'>Tunisia</option>
              <option value='TR'>Turkey</option>
              <option value='TM'>Turkmenistan</option>
              <option value='TC'>Turks and Caicos Islands</option>
              <option value='TV'>Tuvalu</option>
              <option value='UG'>Uganda</option>
              <option value='UA'>Ukraine</option>
              <option value='AE'>United Arab Emirates</option>
              <option value='GB'>United Kingdom</option>
              <option value='UM'>United States Minor Outlying Islands</option>
              <option value='UY'>Uruguay</option>
              <option value='UZ'>Uzbekistan</option>
              <option value='VU'>Vanuatu</option>
              <option value='VE'>Venezuela, Bolivarian Republic of</option>
              <option value='VN'>Viet Nam</option>
              <option value='VG'>Virgin Islands, British</option>
              <option value='VI'>Virgin Islands, U.S.</option>
              <option value='WF'>Wallis and Futuna</option>
              <option value='EH'>Western Sahara</option>
              <option value='YE'>Yemen</option>
              <option value='ZM'>Zambia</option>
              <option value='ZW'>Zimbabwe</option>
            </optgroup>
          </select>
        </label>
      </ul>
      <ul>
        <label>
          Phone Number:
          <input
            type='text'
            placeholder='Enter Phone Number'
            name='phoneNumber'
            ref={register({ required: true, min: 6 })}></input>
        </label>
      </ul>
      {errors.phoneNumber && (
        <span class='error-message'>Phone Number is required.</span>
      )}

      <ul>
        <button type='submit'>Start Trial</button>
      </ul>
    </form>
  );
}
