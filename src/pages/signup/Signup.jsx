import { Container, StyledPaper } from "./styles";
import logo from "../../../public/assets/logoinsta.png";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signupUser } from "../../services/api";
import { toast } from "react-toastify";

const Signup = () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    username: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    const { data } = await signupUser(formValues);
    if (data) {
      if (data.success) {
        toast.success(data.success);
        navigate("/login");
      } else {
        toast.error(data.error);
      }
    }
  };
  return (
    <>
      <Container>
        <StyledPaper>
          <img src={logo} alt="logo" />
          <TextField
            label="Full name"
            fullWidth
            name="fullName"
            value={formValues.fullName}
            onChange={handleChange}
          />
          <TextField
            label="Username"
            fullWidth
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            fullWidth
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            fullWidth
            name="password"
            value={formValues.password}
            onChange={handleChange}
            type="password"
          />
          <Button variant="contained" onClick={handleSignup} fullWidth>
            Signup
          </Button>
          <small>
            Already a user? <Link to="/login">Login</Link>{" "}
          </small>
        </StyledPaper>
      </Container>
    </>
  );
};

export default Signup;
