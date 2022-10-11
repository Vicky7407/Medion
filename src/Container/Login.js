import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";

const LoginSchema = Yup.object().shape({
email: Yup.string()
	.email("Invalid email address format")
	.required("Email is required"),
password: Yup.string()
	.min(3, "Password must be 3 characters at minimum")
	.required("Password is required"),
});
// inintVal = {
// 	name: "",
// 	email: "",
// 	password: "",
//   };
const handleLogin = () => {
    localStorage.setItem('user', '1211')
  }
const handleForgotpass = () =>{
	localStorage.setItem('value')
}
class App extends React.Component {
render() {
	return (
	<div className="container">
		<div className="row">
		<div className="col-lg-12">
			<Formik
			initialValues={{ email: "", password: "" }}
			validationSchema={LoginSchema}
			onSubmit={(values) => {
				console.log(values);
				alert("Form is validated! Submitting the form...");
			}}
			>
			{({ touched, errors, isSubmitting, values }) =>
				!isSubmitting ? (
				<div>
					<div className="row mb-5">
					<div className="col-lg-12 text-center">
						<h1 className="mt-5">Login Form</h1>
					</div>
					</div>
					<Form>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<Field
						type="email"
						name="email"
						placeholder="Enter email"
						autocomplete="off"
                      value={values.email}
						className={`mt-2 form-control
						${touched.email && errors.email ? "is-invalid" : ""}`}
						/>

						<ErrorMessage
						component="div"
						name="email"
						className="invalid-feedback"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="password" className="mt-3">
						Password
						</label>
						<Field
						type="password"
						name="password"
						placeholder="Enter password"
						className={`mt-2 form-control
						${
							touched.password && errors.password
							? "is-invalid"
							: ""
						}`}
						/>
						<ErrorMessage
						component="div"
						name="password"
						className="invalid-feedback"
						/>
					</div>

					<button
						type="submit"
						className="btn btn-primary btn-block mt-4"
						onClick={handleLogin}
					>
						Submit
					</button>
					<button
					type="submit"
					className="btn btn-primary btn-block mt-4"
					onClick={handleForgotpass}
					>
						<a href="Forgotpassword">Forgot password</a>
					</button>
					</Form>
				</div>
				) : (
				<div>
					<h1 className="p-3 mt-5">Form Submitted</h1>

					<div className="alert alert-success mt-3">
					Thank for your connecting with us. Here's what we got from
					you !
					</div>
				</div>
				)
			}
			</Formik>
		</div>
		</div>
	</div>
	);
}
}

export default App;
