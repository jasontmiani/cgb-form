/** @format */

import React from "react";
import axios from "axios"




const HandleCancel = () => {
  const onSubmit = data => {
    axios
      .post("https://af12ae6b-d335-47fe-987e-99bb4c1e36ae.mock.pstmn.io", data)
      .then(console.log(data, "pressed x but still submitted, smaller yeet"));
  };

  return (
    <div className='form-cancel'>
      <h2>Not Wanting to Start a Trial, yet?</h2>
      <subtitle>
        At Least Leave Your Email to Learn Why Kixie Provides the Best Sales
        Dialing Experience!
      </subtitle>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>
          Email Address:
          <input name='noTrialEmail' type='email' ref={register()}></input>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export const HandleSubmit
