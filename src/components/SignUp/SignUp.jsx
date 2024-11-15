import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "./SignUp.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const server = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".Toastify")) {
        toast.dismiss();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleSetFirstname(event) {
    setFirstname(event.target.value);
  }

  function handleSetLastname(event) {
    setLastname(event.target.value);
  }

  function handleSetUsername(event) {
    setUsername(event.target.value);
  }

  function handleSetEmail(event) {
    setEmail(event.target.value);
  }

  function handleSetPassword(event) {
    setPassword(event.target.value);
  }

  function handleSetTerms(event) {
    setTerms(event.target.checked);
  }

  async function handleSubmitAsync(event) {
    event.preventDefault();

    try {
      const response = await fetch(`${server}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Registration successful!", {
          position: "top-center",
          autoClose: false, // Evita el cierre automático
          closeOnClick: false,
          theme: "colored",
          hideProgressBar: true,
          onClose: () => navigate("/"),
          style: {
            backgroundColor: "#ef9b1d",
            color: "white",
            fontWeight: "bold",
            padding: "20px",
          },
        });
      } else {
        setMessage(`Signup failled: ${data.msg}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please, try again.");
      toast.error("Error registering user");
    }
  }

  return (
    <div className="signup-wrapper">
      <div className="signup-form-wrapper">
        <Form onSubmit={handleSubmitAsync} className="signup-form">
          <img
            className="logo-image-signup"
            src="assets/logo/logo-1200x1200-px.png"
            alt="logo"
          />
          <Form.Label className="label-signup">Sign up</Form.Label>
          <Row className="mb-3">
            <div className="name-wrapper">
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik101"
                className="position-relative form-group"
              >
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  value={firstname}
                  onChange={handleSetFirstname}
                  required
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik102"
                className="position-relative form-group"
              >
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  value={lastname}
                  onChange={handleSetLastname}
                  required
                />
              </Form.Group>
            </div>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormikUsername2"
              className="position-relative form-group"
            >
              <Form.Label className="username-signup">Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={username}
                  onChange={handleSetUsername}
                  required
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative form-group"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleSetEmail}
                required
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik104"
              className="position-relative form-group"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleSetPassword}
                required
              />
            </Form.Group>
          </Row>
          <Form.Group className="position-relative mb-3">
            <Form.Check
              required
              name="terms"
              checked={terms}
              label="Agree to terms and conditions"
              onChange={handleSetTerms}
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group>
          <div className="btn-register-wrapper">
            <Button className="btn-register" type="submit">
              Register
            </Button>
          </div>
        </Form>
      </div>
      <div className="signup-img-wrapper">
        <img src="assets/background/photo-signup.jpg" />
      </div>
      <ToastContainer />
      {message && <alert>{message}</alert>}
    </div>
  );
}

export default SignUp;
