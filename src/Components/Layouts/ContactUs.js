import React, { useState } from "react";
import "../Layouts/layouts.css";
import swal from "sweetalert";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  Name: Yup.string()
    .matches("^[a-zA-Z]+$", "Invalid name")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  Email: Yup.string().email("Invalid email").required("Required"),

  Phone: Yup.string()
    .matches("^[0-9]+$", "Invalid number")
    .required("Required"),

  City: Yup.string(),

  msg: Yup.string().min(20, "Too Short").required("Required"),
});

function ContactUs() {
  //     axios.post('http://127.0.0.1:8000/api/addcontact', contactData)
  //     .then(response => element.innerHTML = response.data.id);
  // let contactData = {
  //     'name'    : value  ,
  //     'phone'   : value  ,
  //     'email'   : value  ,
  //     'city'    : value  ,
  //     'message' : value
  // }


  const sendMessageSucsess = () =>
    swal("Good job!", "Thank You For Sending Us!", "success");
  const sendMessageError = () =>
    swal("Sending Error", "Please Try Again .", "error");

  return (
    <>
      <div
        className="bg-white shadow-[0px_0px_10px_2px_rgba(204,204,204,0.5)] md:h-[550px] lg:h-[550px] pt-10 rounded-md"
        id="contact-us"
      >
        <div className="    px-2 rounded-md">
          <div>
            <p className="text-3xl font-bold text-[#45b6ca] ">Get in touch</p>
            <p className="text-center mx-auto w-[90%]">
              Have an inquiry or some feedback for us? Fill out the form below
              to contact our team.
            </p>
          </div>

          <Formik
            className="flex flex-col md:text-left "
            initialValues={{
              Name: "",

              Email: "",

              Phone: "",

              City: "",

              msg: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values

              let contactData = {
                name: values.Name,
                phone: values.Phone,
                email: values.Email,
                city: values.City,
                message: values.msg,
              };
              axios
                .post("http://127.0.0.1:8000/api/addcontact", contactData)
                .then((response) => {
                    if (response.data == 'success'){
                        sendMessageSucsess()
                        let inpts = document.querySelectorAll('#name, #phone , #email , #city , #msg');
                        inpts.forEach(input => {
                            input.value = '';
                          });
                    }else{
                        sendMessageError()
                    }
                
                }).catch((error) => {
                    sendMessageError()
                    console.error(error);
                  });

            
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="h-auto">
                  <div className="w-[80%] mx-auto flex flex-col md:flex-row  justify-between  ">
                    <div className="flex flex-col mb-2 w-full md:w-[48%] ">
                      <Field
                      id="name"
                        name="Name"
                        placeholder="Name"
                        className="p-2 w-full  h-10  bg-[#f2f2f2]"
                      />
                      {errors.Name && touched.Name ? (
                        <div className="text-left ml-1 text-[red] text-sm">
                          {errors.Name}
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-col mb-2 w-full md:w-[48%] ">
                      <Field
                      id="phone"
                        name="Phone"
                        placeholder="Phone"
                        className=" p-2 w-full  h-10  bg-[#f2f2f2]"
                      />
                      {errors.Phone && touched.Phone ? (
                        <div className="text-left ml-1 text-[red] text-sm">
                          {errors.Phone}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col mb-2 w-full md:w-[48%]">
                      <Field
                      id="email"
                        name="Email"
                        placeholder="Email"
                        className="p-2 w-full   h-10  bg-[#f2f2f2]"
                      />
                      {errors.Email && touched.Email ? (
                        <div className="text-left ml-1 text-[red] text-sm">
                          {errors.Email}
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-col mb-2 w-full md:w-[48%]">
                      <Field
                      id="city"
                        name="City"
                        placeholder="City"
                        className="p-2 w-full  h-10   bg-[#f2f2f2]"
                      />
                      {errors.City && touched.City ? (
                        <div className="text-left ml-1 text-[red] text-sm">
                          {errors.City}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="mx-auto w-[80%]">
                    {" "}
                    <Field
                    id="msg"
                      name="msg"
                      as="textarea"
                      placeholder="Enter Your Messege"
                      className="p-2 bg-[#f2f2f2] w-full mx-auto  h-28 "
                    />
                    {errors.msg && touched.msg ? (
                      <div className="text-left ml-1 text-[red] text-sm">
                        {errors.msg}
                      </div>
                    ) : null}{" "}
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[#45b6ca] rounded-md text-white font-bold w-[70%] h-[35px] my-4  "
                  
                >
                  Get in touch
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
