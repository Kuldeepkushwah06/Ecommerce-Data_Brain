import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Summary from './Summary';
import { useDispatch } from 'react-redux';
import {storeData} from '../redux/formSlice'

const BuyForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const navigate = useNavigate()


  // Define the validation schema
  const validationSchema = Yup.object({
    personalDetails: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      contactNumber: Yup.string().required('Contact Number is required'),
    }),
    address: Yup.object({
      street: Yup.string().required('Street is required'),
      city: Yup.string().required('City is required'),
    }),
    paymentDetails: Yup.object({
      cardNumber: Yup.string().required('Card Number is required'),
      expiryDate: Yup.string().required('Expiry Date is required'),
      cvv: Yup.string().required('CVV is required'),
    }),
  });

  const initialValues = {
    personalDetails: {
      firstName: '',
      lastName: '',
      contactNumber: '',
    },
    address: {
      street: '',
      city: '',
    },
    paymentDetails: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    },
  };
const dispatch = useDispatch();
  const onSubmit =  (values) => {


console.log(JSON.stringify(values));
dispatch(storeData(values));
navigate('/summary')
  };
//   const navigateToSummary = ()=>{}
  
  const goToNextStep = async (formik) => {
    const isValid = await formik.validateForm(); // Manually trigger validation

    if (isValid) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formikProps) => (
          <Form className="max-w-md p-8 bg-white rounded shadow-md">
            {currentStep === 1 && (
              <>
                <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
                <Field
                  type="text"
                  name="personalDetails.firstName"
                  placeholder="First Name"
                  className="w-full p-2 mb-2 border rounded"
                />
                <Field
                  type="text"
                  name="personalDetails.lastName"
                  placeholder="Last Name"
                  className="w-full p-2 mb-4 border rounded"
                />
                <Field
                  type="text"
                  name="personalDetails.contactNumber"
                  placeholder="Contact Number"
                  className="w-full p-2 mb-4 border rounded"
                />
              </>
            )}

            {currentStep === 2 && (
              <>
                <h2 className="text-2xl font-semibold mb-4">Address</h2>
                <Field
                  type="text"
                  name="address.street"
                  placeholder="Street"
                  className="w-full p-2 mb-2 border rounded"
                />
                <Field
                  type="text"
                  name="address.city"
                  placeholder="City"
                  className="w-full p-2 mb-4 border rounded"
                />
              </>
            )}

            {currentStep === 3 && (
              <>
                <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
                <Field
                  type="text"
                  name="paymentDetails.cardNumber"
                  placeholder="Card Number"
                  className="w-full p-2 mb-2 border rounded"
                />
                <Field
                  type="text"
                  name="paymentDetails.expiryDate"
                  placeholder="Expiry Date"

                  className="w-full p-2 mb-2 border rounded"
                />
                <Field
                  type="password"
                  name="paymentDetails.cvv"
                  placeholder="CVV"
                  className="w-full p-2 mb-4 border rounded"
                />
              </>
            )}

            <div className="flex justify-between">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={goToPreviousStep}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Previous
                </button>
              )}

              {currentStep < 3 && (
                <button
                  type="button"
                  onClick={() => goToNextStep(formikProps)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Next
                </button>
              )}

              {currentStep === 3 && (
                <button
                  type="submit"
                 
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  disabled={formikProps.isSubmitting}
                >
                  Submit
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
      {/* {currentStep >= 4 && formData && <Summary data={formData} />} */}
    </div>
  );
};
export default BuyForm;
