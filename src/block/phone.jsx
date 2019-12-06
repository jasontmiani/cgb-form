import React from "react";
import ReactDOM from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

return (
	<PhoneInput
		placeholder="Enter Phone Number"
		value={this.state.value}
		onChange={value => this.setState({ value })}
	/>
);
