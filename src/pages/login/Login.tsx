// Login.tsx
import React, { useState } from "react";
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import { loginUser, selectLoginState } from '../../features/auth/loginSlice';
import styles from "./login.module.css";

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { error, loading } = useSelector(selectLoginState);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleInputBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogIn = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simplified regex
    if (emailPattern.test(data.email)) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  
    if (data.password !== "") {
      setValidPassword(false);
    } else {
      setValidPassword(true);
    }
  
    if (
      !validEmail &&
      data.email !== "" &&
      !validPassword &&
      data.password !== ""
    ) {
      setMessage(null);
  
      // Dispatch login action
      dispatch(loginUser(data))
        .unwrap()
        .then(() => {
          setMessage(null); // Clear previous messages
        })
        .catch((error: any) => {
          // Handle the error properly
          if (typeof error === 'string') {
            setMessage(error || "Login failed");
          } else {
            setMessage("Login failed");
          }
        });
    } else {
      setMessage("Please correct the errors and try again.");
    }
  };

  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.login_container}`}>
        <h2 className={`${styles.form_title}`}>LOGIN</h2>
        <form
          className={`${styles.login_form}`}
          onSubmit={(e) => {
            e.preventDefault();
            handleLogIn();
          }}
        >
          {message && (
            <div className={`${styles.div_wrapper}`}>
              <span className={`${styles.message}`}>{message}</span>
            </div>
          )}
          <div className={`${styles.div_wrapper}`}>
            <div className={`${styles.form_input_box}`}>
              <label className={`${styles.form_data_wrapper}`}>
                <span className={`${styles.input_title}`}>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`${styles.input_box}`}
                  onChange={handleInputBox}
                  value={data.email}
                />
              </label>
              {validEmail && (
                <span className={`${styles.invalid_user}`}>
                  Invalid Email Address
                </span>
              )}
            </div>
          </div>

          <div className={`${styles.div_wrapper}`}>
            <div className={`${styles.form_input_box}`}>
              <label className={`${styles.form_data_wrapper}`}>
                <span className={`${styles.input_title}`}>Password</span>
                <div className={`${styles.password_box}`}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    name="password"
                    onChange={handleInputBox}
                    className={`${styles.password_input_box}`}
                    value={data.password}
                  />
                  <button
                    className={`${styles.eye_botton}`}
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                  >
                    {showPassword ? <HiEyeOff /> : <HiEye />}
                  </button>
                </div>
              </label>
              {validPassword && (
                <span className={`${styles.invalid_user}`}>
                  *Please Enter Your Password
                </span>
              )}
            </div>
          </div>

          <div className={`${styles.forgot_password_box}`}>
            <label htmlFor="checkbox" className={`${styles.remember_me}`}>
              <input type="checkbox" name="checkbox" id="checkbox" />
              <span className={`${styles.remember_me_text}`}>
                Remember me
              </span>
            </label>
            <Link
              to="/user/forgot_password"
              className={`${styles.forgot_password_text}`}
            >
              Forgot password?
            </Link>
          </div>

          <div className={`${styles.form_input_box}`}>
            <button
              className={`${styles.login_button}`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log in to your account"}
            </button>
          </div>

          <div className={`${styles.login}`}>
            <span className={`${styles.login_wrapper}`}>
              Don’t have an account yet?{" "}
              <Link to="register" className={`${styles.login}`}>
                Sign up here
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
