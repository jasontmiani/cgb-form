import React from "react";
import ReactDOM from "react-dom";
import useForm from "react-hook-form";
import ReactDOM from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import "./style.scss";
import "style.css";

function StartTrial() {
	const { register, errors, handleSubmit } = useForm({
		mode: "onChange"
	});
	const onSubmit = data => {
		alert(JSON.stringify(data));
	};


	return (
		<div className="App">
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="name">Name</label>
				<input
					name="name"
					placeholder="Full Name"
					ref={register({
						required: {
							isRequired: true,
							message: "This is Required"
						},
						maxLength: {
							value: 30,
							message: "Invalid Submission"
						},
						minLength: {
							value: 4,
							message: "Invalid Submission"
						}
					})}
				/>
				{errors.name && <p>{errors.name.message}</p>}
				<label htmlFor="email">Email</label>
				<input
					name="email"
					placeholder="Email Address"
					type="text"
					ref={register({
						required: {
							isRequired: true,
							message: "Email Address is Required",
						},
						pattern: {
							value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
							message: "Invalid Email Address"
						}
					},
					),
					}
				/>
				{errors.email && <p>{errors.email.message}</p>}
	<PhoneInput
		placeholder="Enter Phone Number"
		value={this.state.value}
					onChange={value => this.setState({ value })} ref={register({
						required: true,
						message: "Phone Number is Required"
		})}
	/> {errors.PhoneInput && <p>{errors.PhoneInput.message}</p>}
				<input type="submit" />
			</form>
		</div>
	)
	};

const rootElement = document.getElementById("root");
ReactDOM.render(<StartTrial />, rootElement);
