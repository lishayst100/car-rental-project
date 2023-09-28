"use client";
import { initialValues, validationSchema } from "@/validations/order";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { OrderType } from "../../../types";
import { baseUrl } from "@/services/cars";
import { useSession } from "next-auth/react";
import Swal from 'sweetalert2'

interface OrderFormProps {
  car: string | null;
  pickUp: string | null;
  dropOff: string | null;
  pickUpDate: string | null;
  dropOffDate: string | null;
  handleIsOpen?: () => void;
  price: number | null;
  daysDifference: number | null;
  totalPrice:number
}



const OrderForm = ({
  car,
  dropOff,
  dropOffDate,
  pickUp,
  pickUpDate,
  handleIsOpen,
  daysDifference,
  price,
  totalPrice
}: OrderFormProps) => {
  const { data: session } = useSession();
  const username = session?.user?.name;

  const onSubmit = (values: OrderType) => {
    const carDetails = {
      car,
      dropOff,
      dropOffDate,
      pickUp,
      pickUpDate,
      daysDifference,
      price,
      username,
      totalPrice
    };
    const order = { ...carDetails, ...values };
    fetch(`${baseUrl}/order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((result) => console.log(result.message));
    console.log(order);
    Swal.fire({
      icon: "success",
      confirmButtonColor: "#ff1052",
      titleText: `Thank you for Ordering a car from our company`,
      text: "Check your email to confirm your order.",
      confirmButtonText: "Close"
    }).then(() => {
      handleIsOpen!();
    });
    
  };

  return (
    <>
      <h2 className="bg-light m-0 text-center red font-bolder pt-4">
        Personal information
      </h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="p-5 container mx-auto d-flex flex-column justify-content-center bg-light">
          <div className="fullname phone age d-flex flex-wrap justify-content-center gap-4 mx-auto">
            <div className="col-lg-5">
              <label htmlFor="firstName" className="font-bolder para">
                First Name<span className="red"> *</span>
              </label>
              <Field
                name="firstName"
                type="text"
                className="form-control"
                id="firstName"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="col-lg-5">
              <label htmlFor="lastName" className="font-bolder para">
                Last Name<span className="red"> *</span>
              </label>
              <Field
                name="lastName"
                type="text"
                className="form-control"
                id="lastName"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="col-lg-5">
              <label htmlFor="phone" className="font-bolder para">
                Phone<span className="red"> *</span>
              </label>
              <Field
                name="phone"
                type="text"
                className="form-control"
                id="phone"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="col-lg-5">
              <label htmlFor="age" className="font-bolder para">
                Age<span className="red"> *</span>
              </label>
              <Field
                name="age"
                type="number"
                className="form-control"
                id="age"
              />
              <ErrorMessage
                name="age"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="col-lg-5">
              <label htmlFor="email" className="font-bolder para">
                Email<span className="red"> *</span>
              </label>
              <Field
                name="email"
                type="text"
                className="form-control"
                id="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="col-lg-5">
              <label htmlFor="address" className="font-bolder para">
                Address<span className="red"> *</span>
              </label>
              <Field
                name="address"
                type="text"
                className="form-control"
                id="address"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="col-lg-5">
              <label htmlFor="city" className="font-bolder para">
                City<span className="red"> *</span>
              </label>
              <Field
                name="city"
                type="text"
                className="form-control"
                id="city"
              />
              <ErrorMessage
                name="city"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="col-lg-5">
              <label htmlFor="zip" className="font-bolder para">
                Zip Code<span className="red"> *</span>
              </label>
              <Field
                name="zip"
                type="number"
                className="form-control"
                id="zip"
              />
              <ErrorMessage
                name="zip"
                component="div"
                className="text-danger"
              />
            </div>
          </div>
          <div className="d-flex gap-2 justify-content-center p-3 ">
            <button className="register">Reserve Now</button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default OrderForm;
