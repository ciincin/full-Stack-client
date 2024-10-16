import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

function Login() {
  const server = import.meta.env.VITE_SERVER_URL;

  const googleId =
    "445131528162-l6a7p0s8829srhi3gc2sa5vunsm34pp7.apps.googleusercontent.com";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleSetEmail(event) {
    setEmail(event.target.value);
  }

  function handleSetPassword(event) {
    setPassword(event.target.value);
  }

  async function handleLogin(event) {
    event.preventDefault();

    try {
      console.log(server);
      const response = await axios.post(
        `${server}/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true, //allows send cookies
        }
      );

      if (!response || !response.data) {
        setErrorMessage("login failed: data no received");
      } else {
        setTimeout(() => {
          navigate("/profile");
        }, 1000);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.msg || "An error occurred");
    }
  }

  async function handleGoogleLoginSuccess(credentialResponse) {
    try {
      const response = await axios.post(
        `${server}/google-login`,
        {
          token: credentialResponse.credential,
        },
        {
          withCredentials: true,
        }
      );

      if (response && response.data) {
        navigate("/profile");
      } else {
        setErrorMessage("Google login failed:Data not received");
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.msg || "Google login error occurred"
      );
    }
  }

  function handleGoogleLoginError() {
    setErrorMessage("Google login failed");
  }

  useEffect(() => {
    console.log(server);
    console.log("holaaaaaaaaaaa");
  }, []);
  return (
    <div className="login-wrapper">
      <div className="img-wrapper">
        <img src="assets/background/cake.jpg" />
      </div>

      <Form className="form-wrapper" onSubmit={handleLogin}>
        <Form.Group className="mb-3-wrapper" controlId="formBasicEmail">
          <div className="login-title-wrapper">
            <img
              className="logo-image"
              src="assets/logo/logo-1200x1200-px.png"
              alt="logo"
            />
            <Form.Label className="label-login">Login.</Form.Label>
            <Form.Text className="text-muted">
              Please, enter your email and password.
            </Form.Text>
          </div>
          <Form.Control
            className="input-style"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleSetEmail}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className="input-style"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleSetPassword}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <div className="btn-wrapper">
          <Button variant="primary" type="submit" className="btn-style">
            Submit
          </Button>
          <div className="google-login">
            <GoogleOAuthProvider clientId={googleId}>
              <GoogleLogin
                className="input-style"
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginError}
              />
            </GoogleOAuthProvider>
          </div>
        </div>
        <div className="register">
          Are you not registered?{" "}
          <a className="register-a" href="/signup">
            Register now
          </a>
        </div>
      </Form>

      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
    </div>
  );
}

export default Login;
