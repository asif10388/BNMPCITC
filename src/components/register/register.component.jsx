import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { db } from "../../firebase/firebase.utils";
import {
  MyTextInput,
  MySelect,
} from "../form-elements/form-elements.component";
import CustomButton from "../custom-button/custom-button.component";
import "./register.styles.scss";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
    };
  }
  render() {
    return (
      <div id="register">
        <Formik
          initialValues={{ fullname: "", email: "", phone: "", eventType: "" }}
          validationSchema={Yup.object({
            fullname: Yup.string()

              .max(15, "Must be 15 characters or less")

              .required("Required"),

            email: Yup.string()

              .email("Invalid email address")

              .required("Required"),
            phone: Yup.string()

              .max(11, "Must be 15 characters or less")

              .required("Required"),
            eventType: Yup.string()

              .oneOf(
                [
                  "digital poster design",
                  "presentation",
                  "project display",
                  "other",
                ],

                "Invalid Event Type"
              )

              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              console.log(values);

              var fetchedRef = db
                .collection("participant_Data")
                .doc(values.email);

              fetchedRef
                .get()
                .then(function (doc) {
                  if (doc.exists) {
                    alert("A participant with that email already exists");
                    resetForm({});
                  } else {
                    const docRef = db.doc(`participant_Data/${values.email}`);
                    docRef
                      .set({
                        participantData: values,
                      })
                      .then(() => {
                        console.log(
                          "Document written with ID: ",
                          values.fullname
                        );
                      })
                      .catch(function (error) {
                        console.error("Error adding document: ", error);
                      });
                    alert("Thank you for registering");

                    resetForm({});
                  }
                })
                .catch(function (error) {
                  console.log("error", error);
                });
              this.setState({ isSubmitted: true });
              setSubmitting(false);
            }, 400);
          }}
        >
          <section class="text-white relative register-section sm:rounded-lg sm:mx-24 mt-12 mb-12">
            <div class="container py-12 mx-auto ">
              <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-5xl text-3xl mb-4">Register Now!</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                  What are you waiting for? Come join us on this adventure and
                  be a part of something challenging.
                </p>
              </div>
              <div class="w-full lg:w-1/2 md:w-2/3 mx-auto">
                <Form class="flex flex-col items-center sm:flex-row flex-wrap">
                  <div class="p-2 w-3/4 sm:w-1/2">
                    <MyTextInput
                      label="Full Name"
                      name="fullname"
                      type="text"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div class="p-2 w-3/4 sm:w-1/2">
                    <MyTextInput
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="example@domain.com"
                    />
                  </div>
                  <div class="p-2 w-3/4 sm:w-1/2">
                    <MyTextInput
                      label="Phone"
                      name="phone"
                      type="text"
                      placeholder="01XXXXXXXXX"
                    />
                  </div>
                  <div class="p-2 w-3/4 sm:w-1/2">
                    <MySelect label="Event Type" name="eventType">
                      <option value="">Select an Event</option>

                      <option value="digital poster design">
                        Digital poster design
                      </option>

                      <option value="presentation">Presentation</option>

                      <option value="project display">Project Display</option>

                      <option value="other">Other</option>
                    </MySelect>
                  </div>
                  <div class="p-2 w-full">
                    <CustomButton isRegisterAndSubmit type="submit">
                      Let's Do This
                    </CustomButton>
                  </div>
                </Form>
              </div>
            </div>
          </section>
        </Formik>
      </div>
    );
  }
}
export default Register;
