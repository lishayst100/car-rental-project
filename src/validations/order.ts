import * as yup from "yup";

const phoneRegex = /^0\d([\d]{0,1})([- ]{0,1})\d{7}$/;

export const initialValues = {
    firstName: '',
    lastName: '',
    phone:'',
    age: 18,
    email: '',
    address:'',
    city:'',
    zip:0,
}



export const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(2, "must contain at least 2 letters")
    .required("First Name is Required"),
  lastName: yup
    .string()
    .min(2, "must contain at least 2 letters")
    .required("Last Name is Required"),
  phone: yup
    .string()
    .min(8, "Invalid Phone Number")
    .max(11, "Invalid Phone Number")
    .matches(phoneRegex, "Please enter valid phone number")
    .required("Phone is Required"),
  age: yup
    .number()
    .min(18, "Age must be older than 18")
    .required("Age is Required"),
  email: yup.string().email("Type a Valid Email").required("Email is Required"),
  address: yup
    .string()
    .min(2, "must contain at least 2 letters")
    .required("Address is Required"),
  city: yup
    .string()
    .min(2, "must contain at least 2 letters")
    .required("City is Required"),
  zip: yup
    .string()
    .min(1, "Invalid Zip Code")
    .max(11, "Invalid Zip Code")
    .required("Zip Code is Required"),
});