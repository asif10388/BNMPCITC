import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { db } from "../../firebase/firebase.utils";
import { MyTextInput } from "../../components/form-elements/form-elements.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./submission.styles.scss";

class Submission extends React.Component {
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
          initialValues={{ fullname: "", registrationId: "", file: "" }}
          validationSchema={Yup.object({
            fullname: Yup.string()

              .max(15, "Must be 15 characters or less")

              .required("Required"),

            registrationId: Yup.string()

              .max(15, "Must be 15 characters or less")

              .required("Required"),
            file: Yup.string().required("Required"),
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
          <section class="text-white relative submit-section sm:rounded-lg sm:mx-24 mt-12 mb-12">
            <div class="container py-12 mx-auto ">
              <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-5xl text-3xl mb-4">Submit Your Project</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                  So you've competed against some of the top talents of BNMPC
                  and got this far. Now it's time to put your skills to the
                  test. Submit your project and await your amazing prizes!
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
                      label="Registration Id"
                      name="registrationId"
                      type="text"
                      placeholder="239485"
                    />
                  </div>
                  <div class="p-2 w-3/4 sm:w-1/2">
                    <MyTextInput
                      label="File"
                      name="file"
                      type="file"
                      placeholder="01XXXXXXXXX"
                    />
                  </div>
                  <div class="p-2 w-3/4 sm:w-1/2"></div>
                  <div class="p-2 w-full">
                    <CustomButton isRegisterAndSubmit>
                      Submit Project
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
export default Submission;
