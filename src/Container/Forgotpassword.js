import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";



const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
});

function Forgotpassword(props) {
    return (
        <div>
            <Formik>
                <Form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            autocomplete="off"
                            className={`mt-2 form-control`}
                        />

                        <ErrorMessage
                            component="div"
                            name="email"
                            className="invalid-feedback"
                        />
                        	<button
						type="submit"
						className="btn btn-primary btn-block mt-4"
					>
						Submit
					</button>
                    </div>
                </Form>
                
            </Formik>
        </div>




    );
}

export default Forgotpassword;

