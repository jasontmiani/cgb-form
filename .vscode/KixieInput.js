/** @format */
import React, { useContext } from "react";

export default function KixieInput ( props )
{
  const [label,name,input,placeholder] = useContext([])
  return (
    <label className='form-label'>
      { label }
      <input
        name={ name }
        type={ input }
        placeholder={ placeholder }
      </input>
    </label>
  );
}
