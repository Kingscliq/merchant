import * as Yup from 'yup';

export const resetPasswordValidationSchema = Yup.object({
  username: Yup.string('Enter your username').required('Username is Required'),
});

export const loginValidationSchema = Yup.object({
  userName: Yup.string().required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(4, 'Password is too short - should be 4 chars minimum'),
});

// ******************** signup validation begins *******************

export const signupFlow1 = Yup.object({
  email: Yup.string().email().required('Email is required'),
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  date_of_birth: Yup.string().required('Date of birth is required'),
  state: Yup.string().required('State is required'),
  gender: Yup.string().required('Gender is required'),
  lga: Yup.string().required('LGA is required'),
  address: Yup.string().required('Address is required'),
  terms: Yup.boolean()
    .oneOf([true])
    .required('The terms and condition must be accepted'),
});

export const signupMobile = Yup.object({
  phone_number: Yup.number().required('Mobile number is required'),
  // .min(11, 'Mobile number is invalid')
  // .max(11, 'Mobile number is invalid'),
});

export const confirmSignupMobile = Yup.object({
  otp: Yup.string()
    .required('Verification code is required')
    .min(6, 'Verification code is invalid')
    .max(6, 'Verification code is invalid'),
});

export const signupBvn = Yup.object({
  bvn: Yup.number().required('BVN is required').min(4, 'BVN is invalid'),
  // .max(4, 'BVN is invalid'),
});

export const signupCredentials = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Must be at least 8 characters'),
  confirm_password: Yup.string()
    .required('Confirm Password is required')
    .min(8, 'Must be at least 8 characters'),
});

export const signupValidationSchema = Yup.object({
  email: Yup.string().email().required('Email is required'),
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  date_of_birth: Yup.string().required('Date of birth is required'),
  state: Yup.string().required('State is required'),
  lga: Yup.string().required('LGA is required'),
  address: Yup.string().required('Address is required'),
  phone_number: Yup.number()
    .required('Mobile number is required')
    .min(11, 'Mobile number is invalid')
    .max(11, 'Mobile number is invalid'),
  bvn: Yup.number()
    .required('BVN is required')
    .min(4, 'BVN is invalid')
    .max(4, 'BVN is invalid'),
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(4, 'Must be at least 8 characters'),
  confirm_password: Yup.string()
    .required('Confirm Password is required')
    .min(4, 'Must be at least 8 characters'),
});

// !delete schemas
export const signupFlowPhoneValidationSchema = Yup.object({
  mobile: Yup.string()
    .required('Mobile number is required')
    .min(11, 'Mobile number is invalid')
    .max(11, 'Mobile number is invalid'),
});

export const signupFlowBvnValidationSchema = Yup.object({
  bvn: Yup.string()
    .required('BVN is required')
    .min(4, 'BVN is invalid')
    .max(4, 'BVN is invalid'),
});

export const signupFlowCredentialsValidationSchema = Yup.object({
  user: Yup.string().required('Username is required'),
  pass: Yup.string().required('Password is required'),
  cf_pass: Yup.string().required('Confirm Password is required'),
});

// ******************** signup validation ends *******************

// ******************** forgot password validation begins *******************
export const forgotPassFlowCredentialsValidationSchema = Yup.object({
  userName: Yup.string().required('Username is required'),
});

export const forgotPassFlowOtpValidationSchema = Yup.object({
  otp: Yup.string()
    .required('OTP is required')
    // .min(6, 'OTP is invalid')
    .max(6, 'OTP is invalid'),
});

export const forgotPassFlowNewPassValidationSchema = Yup.object({
  pass: Yup.string()
    .required('Password is required')
    .min(8, 'Must be at least 8 characters.'),
  cf_pass: Yup.string()
    .required('Confirm Password is required')
    .min(8, 'Must be at least 8 characters.'),
});

export const forgotPassFlowVerifyValidationSchema = Yup.object({
  confirm: Yup.string()
    .required('Confirmation code is required')
    .min(4, 'Verification code is invalid'),
});

// ******************** signup validation ends *******************

// ******************** welcome validation begins *******************
const SUPPORTED_FORMATS = ['img/png', 'img/jpg', 'img/jpeg'];
export const welcomeValidationSchema = Yup.object({
  Identity: Yup.mixed()
    .nullable()
    .required('')
    .test(
      'FILE_SIZE',
      'Uploaded file is too big',
      (value) => !value || (value && value.size <= 1024 * 1024)
    ),
  business_evidence: Yup.mixed()
    .nullable()
    .required('')
    .test(
      'FILE_SIZE',
      'Uploaded file is too big',
      (value) => !value || (value && value.size <= 1024 * 1024)
    ),
  business_name: Yup.string().required('Business name is required'),
  business_type: Yup.string().required('Business type is required'),
  bank_name: Yup.string().required('Bank name is required'),
  account_number: Yup.number().required('Account number is required'),
});
// ******************** welcome validation ends *******************
