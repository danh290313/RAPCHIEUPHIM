import * as Yup from "yup";

const phoneNumber = Yup.string()
  // .matches(/^[0-9]+$/, "Number only")
  .matches(/(0[3|5|7|8|9])+([0-9]{8})\b/, "Phone number is invalid")
  .min(10, "Phone must be 10 characters")
  .max(10, "Phone must be 10 characters")
  .required("Phone is required");
const name = Yup.string()
  .min(2, "Name must be at least 2 characters")
  .required("Name is required");
const nameSize = Yup.string()
.min(1, "Name must be at least 2 characters")
.required("NameSize is required");

const email = Yup.string()
  .email("Email is invalid")
  .required("Email is required");
const address = Yup.string().required("Address is required");
const hometown = Yup.string().required("Hometown is required");
const date_opend = Yup.string().required("Date_opend is required");
const description = Yup.string().min(
  15,
  "Description must be at least 15 characters"
);
const price = Yup.string()
  .required("Price is required")
  .matches(/^[0-9]+$/, "Number only");
const discount = Yup.string().matches(/^[0-9]+$/, "Number only");
const sale_on_days = Yup.string().matches(/^[0-9]+$/, "Number only");
const image = Yup.string().required("Image is required");
const active = Yup.boolean();
const type = Yup.string().required("Type is required");
const dob = Yup.string().required("Dob is required").nullable();
const gender = Yup.string().required("Gender is required");
const password = Yup.string().required("Password is required");
const branch = Yup.string().required("Branch is required");
const position = Yup.string().required("Position is required");
const ratio = Yup.string().required("Ratio is required");
const uom = Yup.string().required("Uom is required");

export const loginSchema = Yup.object().shape({
  email,
  password,
});

export const RegisterSchema = Yup.object().shape({
  name, phoneNumber, 
  email, password, }
);
export const staffSchema = Yup.object().shape({
  phoneNumber,
  name,
  gender,
  address,
  hometown,
  dob,
  branch,
  position,
});
export const warehousesSchema = Yup.object().shape({
  phone_number: phoneNumber,
  name,
  address,
  date_opend,
  active,
});
export const drinksSchema = Yup.object().shape({
  name,
  description,
  price,
  discount,
  sale_on_days,
  image,
  active,
  type,
});
export const customerSchema = Yup.object().shape({
  phone_number: phoneNumber,
  name,
  gender,
  dob,
  active,
});
export const BranchSchema = Yup.object().shape({
  phoneNumber,
  name,
  address,
  dateOpened: date_opend,
  active,
});
export const ProviderSchema = Yup.object().shape({
  phoneNumber,
  name,
  address,
});

export const signinSchema = Yup.object().shape({
  email,
  password,
});


export const sizeSchema = Yup.object().shape({
  name: nameSize ,
  ratio,
});  

export const materialSchema = Yup.object().shape({
  name,
  uom,
});  

export const confirmPasswordSchema = Yup.object().shape({
   password: Yup
    .string()
    .required('Password is required')
    .min(5, 'Your password is too short.'),
  confirmpassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  email,

  });