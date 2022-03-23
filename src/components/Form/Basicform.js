import React, { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import "./form.css";
import * as Yup from "yup";
import TextError from "./TextError";
import Button from '@mui/material/Button';

const initialValues = {
  name: "Vaibhav Boraganve",
  email: "",
  channel: "",
  comments: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const savedValues = {
  name: "V",
  email: "v@gmail.com",
  channel: "Linkedin",
  comments: "single Source of truth",
  address: "Berlin",
  social: {
    facebook: "facebook",
    twitter: "twitter",
  },
  phoneNumbers: ["12345", "67890"],
  phNumbers: ["6543789"],
};

const onSubmit = (values, submitProps) => {
  console.log("data", values);
  console.log("Form data", values);
  console.log("submitProps", submitProps);
  submitProps.setSubmitting(false);
  submitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
  // comments:Yup.string().required.apply("Required")
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

function Basic() {
  const [formValues, setFormValues] = useState(null);
  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      // validateOnMount
    >
      {(formik) => {
        console.log()
        return (
          <>
            <h1 className="form-header">React Basic Formik Forms</h1>
            <Form>
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component={TextError} />
              </div>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <Field type="text" id="email" name="email" />
                <ErrorMessage name="email">
                  {(error) => <div className="error">{error}</div>}
                </ErrorMessage>
              </div>
              <div className="form-control">
                <label htmlFor="channel">Channel</label>
                <Field
                  type="text"
                  id="channel"
                  name="channel"
                  placeholder="Channel U like!"
                />
                <ErrorMessage name="channel" />
              </div>
              <div className="form-control">
                <label htmlFor="comments">Comments</label>
                <Field
                  as="textarea"
                  id="comments"
                  name="comments"
                  validate={validateComments}
                />
                <ErrorMessage name="comments" component={TextError} />
              </div>

              <div className="form-control">
                <label htmlFor="address">Address</label>
                <Field name="address">
                  {({ field, form, meta }) => {
                    // console.log('Field render')
                    return (
                      <div>
                        <input type="text" {...field} />
                        {meta.touched && meta.error ? (
                          <div>{meta.error}</div>
                        ) : null}
                      </div>
                    );
                  }}
                </Field>
              </div>

              <div className="form-control">
                <label htmlFor="facebook">Facebook profile</label>
                <Field type="text" id="facebook" name="social.facebook" />
              </div>

              <div className="form-control">
                <label htmlFor="twitter">Twitter profile</label>
                <Field type="text" id="twitter" name="social.twitter" />
              </div>

              <div className="form-control">
                <label htmlFor="primaryPh">Primary phone number</label>
                <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
              </div>

              <div className="form-control">
                <label htmlFor="secondaryPh">Secondary phone number</label>
                <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
              </div>

              <div className="form-control">
                <label htmlFor="listofPh">List of phone numbers</label>
                <FieldArray name="phNumbers" type="text" id="listphno">
                  {(fieldArrayProps) => {
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { phNumbers } = values;
                    // console.log('fieldArrayProps', fieldArrayProps)
                    // console.log('Form errors', form.errors)
                    return (
                      <div style={{marginLeft:70}} >
                        {phNumbers.map((phNumber, index) => (
                          <div key={index}>
                            <Field name={`phNumbers[${index}]`} />
                            {index > 0 && (
                              <button type="button" onClick={() => remove(index)} style={{marginLeft:20}}> - </button>
                              
                            )}
                            <button type="button" onClick={() => push("")} style={{marginLeft:20}}> + </button>
                          </div>
                        ))}
                        
                      </div>
                    );
                  }}
                </FieldArray>
              </div>

              <div className="buttons">
                <Button
                  variant="contained"
                  type="button"
                  onClick={() => setFormValues(savedValues)}
                >
                  Load saved data
                </Button>&nbsp;&nbsp;&nbsp;
                <Button type="reset" variant="contained">Reset</Button>&nbsp;&nbsp;&nbsp;
                <Button
                  type="submit"
                  variant="contained"
                  // style={{ marginLeft: 500, marginTop: 20 }}
                  disabled={formik.isSubmitting}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}

export default Basic;
