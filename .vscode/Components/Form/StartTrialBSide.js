/** @format */

import React from "react";
import useForm from "react-hook-form";
import axios from "axios";

export default function StartTrialBSide() {
  const { register, handleSubmit } = useForm();

  //TODO: Determine onSubmit handling --> ie display banner. this may require separating into another ()component

  const onSubmit = data => {
    console.log(data, "test-beforeAxios");

    axios
      .post("https://af12ae6b-d335-47fe-987e-99bb4c1e36ae.mock.pstmn.io", data)
      .then(console.log(data, "pressed x but still submitted, smaller yeet"));
  };

  return (
    <div className='form-bside'>
      <h2>Not Ready to Start a Trial, yet?</h2>
      <subtitle>
        At Least Leave Your Email to Learn Why Kixie Provides the Best Sales
        Dialing Experience!
      </subtitle>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>
          Email Address:
          <input name='emailAddress' type='email' ref={register}></input>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
