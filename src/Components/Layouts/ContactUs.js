import React from "react";
import "../Layouts/layouts.css";
import swal from 'sweetalert';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
    Name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    email: Yup.string().email('Invalid email').required('Required'),

    phone: Yup.string().matches("^[0-9]+$",
              "Invalid number"
            ),


    city: Yup.string(),
           
        
});


function ContactUs() {


    const sendCase = true;
    const sendMessageSucsess = () => swal("Good job!", "Thank You For Sending Us!", "success");
    const sendMessageError = () => swal("Sending Error", "Please Try Again .", "error");


    return (
        <>

            <div className="bg-white shadow-[0px_0px_10px_2px_rgba(204,204,204,0.5)] md:h-[550px] lg:h-[500px] pt-10 rounded-md" id="contact-us">

                <div className="    px-2 rounded-md">
                    <div>
                        <p className="text-3xl font-bold">Get in touch</p>
                        <p className="text-center mx-auto w-[90%]">Have an inquiry or some feedback for us? Fill out the form below to contact our team.</p>

                    </div>
                   


                    <Formik className="flex flex-col md:text-left "
                        initialValues={{
                            Name: '',

                            email: '',

                            phone: '',

                            city: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            // same shape as initial values
                            console.log(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form  >

                                    <div className="h-auto">
                                <div className="w-[80%] mx-auto flex flex-col md:flex-row  justify-between  ">

                                    <div className="flex flex-col mb-2 w-full md:w-[48%] ">
                                        <Field name="Name"  placeholder="Name" className="p-2 w-full  h-10  bg-[#f2f2f2]" />
                                        {errors.Name && touched.Name ? (
                                            <div className="text-left ml-1 text-sm">{errors.Name}</div>
                                        ) : null}

                                    </div>


                                    <div className="flex flex-col mb-2 w-full md:w-[48%] ">
                                        <Field name="phone"  placeholder="Phone" className=" p-2 w-full  h-10  bg-[#f2f2f2]" />
                                        {errors.phone && touched.phone ? (
                                            <div className="text-left ml-1 text-sm">{errors.phone}</div>
                                        ) : null}
                                    </div>
                                </div>


                                <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-between">

                                    <div className="flex flex-col mb-2 w-full md:w-[48%]">
                                        <Field name="email" placeholder="Email" className="p-2 w-full   h-10  bg-[#f2f2f2]" />
                                        {errors.email && touched.email ? <div className="text-left ml-1 text-sm" >{errors.email}</div> : null}
                                    </div>

                                    <div className="flex flex-col mb-2 w-full md:w-[48%]">
                                        <Field name="city" placeholder="City" className="p-2 w-full  h-10   bg-[#f2f2f2]" />
                                        {errors.city && touched.city ? <div className="text-left ml-1 text-sm">{errors.city}</div> : null}
                                    </div>


                                </div>

                                <div className="mx-auto w-[80%]"> <textarea placeholder="message" className="p-2 bg-[#f2f2f2] w-full mx-auto  h-28 "></textarea></div>




                                </div>


                                <button type="submit" className="bg-[#45b6ca] rounded-md text-white font-bold w-[70%] h-[35px] my-4  " onClick={sendCase ? sendMessageSucsess : sendMessageError}>Get in touch</button>
                               

                            </Form>
                        )}
                    </Formik>








                </div>
            </div>









        </>
    );
};

export default ContactUs;