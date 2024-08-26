import React, { useState } from "react";
import styles from "../signup/signup.module.css"; // Ensure correct path
import { Link, useNavigate } from "react-router-dom";
import { HiEyeOff, HiEye } from "react-icons/hi";
import axios from "axios";
import { apiRoutes } from "../../utils/apiRoutes";
import { ToastContainer, toast } from "react-toastify";

interface SignupResponse {
  token: string;
}

interface SignupData {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  city: string;
  street: string;
  postIndex: string;
}

function isAxiosError(error: any): error is { response?: { data?: { message?: string } } } {
  return error && typeof error === 'object' && 'response' in error;
}

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState<SignupData>({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    city: "",
    street: "",
    postIndex: "",
  });

  const [validTitle, setValidTitle] = useState(false);
  const [validFirstName, setValidFirstName] = useState(false);
  const [validLastName, setValidLastName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validCountry, setValidCountry] = useState(false);
  const [validCity, setValidCity] = useState(false);
  const [validStreet, setValidStreet] = useState(false);
  const [validPostIndex, setValidPostIndex] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const navigate = useNavigate();

  const handleInputBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    let valid = true;

    if (!data.title) {
      setValidTitle(true);
      valid = false;
    } else {
      setValidTitle(false);
    }

    if (!data.firstName) {
      setValidFirstName(true);
      valid = false;
    } else {
      setValidFirstName(false);
    }

    if (!data.lastName) {
      setValidLastName(true);
      valid = false;
    } else {
      setValidLastName(false);
    }

    if (!data.email || !/^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([A-Za-z]{2,4})$/.test(data.email)) {
      setValidEmail(true);
      valid = false;
    } else {
      setValidEmail(false);
    }

    if (!data.password || data.password.length < 8) {
      setValidPassword(true);
      valid = false;
    } else {
      setValidPassword(false);
    }

    if (!data.country) {
      setValidCountry(true);
      valid = false;
    } else {
      setValidCountry(false);
    }

    if (!data.city) {
      setValidCity(true);
      valid = false;
    } else {
      setValidCity(false);
    }

    if (!data.street) {
      setValidStreet(true);
      valid = false;
    } else {
      setValidStreet(false);
    }

    if (!data.postIndex) {
      setValidPostIndex(true);
      valid = false;
    } else {
      setValidPostIndex(false);
    }

    if (valid) {
      handleApiCalling(data);
    } else {
      setValidationMessage("Please fill out all required fields correctly.");
    }
  };

  const handleApiCalling = async (sendData: SignupData) => {
    try {
      const response = await axios.post<SignupResponse>(apiRoutes.signupURI, sendData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { token } = response.data;
      localStorage.setItem("notebookToken", token);
      toast.success("Signup Successfully", { position: "top-center" });
      navigate("/login");
    } catch (error: any) {
      if (isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || "An error occurred";
        setValidationMessage(errorMessage);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.signup_container}>
        <h2 className={styles.form_title}>Create your Account</h2>
        <form className={styles.signup_form} onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div className={styles.div_wrapper}>
            <div className={styles.input_box_wrapper}>
              <label className={styles.form_data_wrapper}>
                <span className={styles.input_title}>Title</span>
                <input
                  type="text"
                  placeholder="Enter your title"
                  name="title"
                  onChange={handleInputBox}
                  className={`${styles.input_box} ${validTitle ? styles.invalid_input : styles.valid_input}`}
                />
                {validTitle && <span className={styles.invalid_user}>*Title is required</span>}
              </label>
            </div>

            <div className={styles.input_box_wrapper}>
              <label className={styles.form_data_wrapper}>
                <span className={styles.input_title}>First Name</span>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  onChange={handleInputBox}
                  className={`${styles.input_box} ${validFirstName ? styles.invalid_input : styles.valid_input}`}
                />
                {validFirstName && <span className={styles.invalid_user}>*First name is required</span>}
              </label>
            </div>
          </div>

          <div className={styles.div_wrapper}>
            <div className={styles.input_box_wrapper}>
              <label className={styles.form_data_wrapper}>
                <span className={styles.input_title}>Last Name</span>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  name="lastName"
                  onChange={handleInputBox}
                  className={`${styles.input_box} ${validLastName ? styles.invalid_input : styles.valid_input}`}
                />
                {validLastName && <span className={styles.invalid_user}>*Last name is required</span>}
              </label>
            </div>

            <div className={styles.input_box_wrapper}>
              <label className={styles.form_data_wrapper}>
                <span className={styles.input_title}>Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  onChange={handleInputBox}
                  className={`${styles.input_box} ${validEmail ? styles.invalid_input : styles.valid_input}`}
                />
                {validEmail && <span className={styles.invalid_user}>*Invalid email address</span>}
              </label>
            </div>
          </div>

          <div className={styles.div_wrapper}>
            <div className={styles.input_box_wrapper}>
              <label className={styles.form_data_wrapper}>
                <span className={styles.input_title}>Country</span>
                <input
                  type="text"
                  placeholder="Enter your country"
                  name="country"
                  onChange={handleInputBox}
                  className={`${styles.input_box} ${validCountry ? styles.invalid_input : styles.valid_input}`}
                />
                {validCountry && <span className={styles.invalid_user}>*Country is required</span>}
              </label>
            </div>

            <div className={styles.input_box_wrapper}>
              <label className={styles.form_data_wrapper}>
                <span className={styles.input_title}>City</span>
                <input
                  type="text"
                  placeholder="Enter your city"
                  name="city"
                  onChange={handleInputBox}
                  className={`${styles.input_box} ${validCity ? styles.invalid_input : styles.valid_input}`}
                />
                {validCity && <span className={styles.invalid_user}>*City is required</span>}
              </label>
            </div>
          </div>

          <div className={styles.div_wrapper}>
            <div className={styles.input_box_wrapper}>
              <label className={styles.form_data_wrapper}>
                <span className={styles.input_title}>Street</span>
                <input
                  type="text"
                  placeholder="Enter your street"
                  name="street"
                  onChange={handleInputBox}
                  className={`${styles.input_box} ${validStreet ? styles.invalid_input : styles.valid_input}`}
                />
                {validStreet && <span className={styles.invalid_user}>*Street is required</span>}
              </label>
            </div>

            <div className={styles.input_box_wrapper}>
              <label className={styles.form_data_wrapper}>
                <span className={styles.input_title}>Post Index</span>
                <input
                  type="text"
                  placeholder="Enter your post index"
                  name="postIndex"
                  onChange={handleInputBox}
                  className={`${styles.input_box} ${validPostIndex ? styles.invalid_input : styles.valid_input}`}
                />
                {validPostIndex && <span className={styles.invalid_user}>*Post index is required</span>}
              </label>
            </div>
          </div>

          <div className={styles.div_wrapper}>
            <div className={styles.input_box_wrapper}>
              <label className={styles.form_data_wrapper}>
                <span className={styles.input_title}>Password</span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  onChange={handleInputBox}
                  className={`${styles.password_box} ${validPassword ? styles.invalid_input : styles.valid_input}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.eye_botton}
                >
                  {showPassword ? <HiEye /> : <HiEyeOff />}
                </button>
                {validPassword && <span className={styles.invalid_user}>*Password must be at least 8 characters</span>}
              </label>
            </div>
          </div>

          {validationMessage && <p className={styles.validation_message}>{validationMessage}</p>}

          <button type="submit" className={styles.submit_button}>
            Sign Up
          </button>

          <p className={styles.sign_in_link}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
