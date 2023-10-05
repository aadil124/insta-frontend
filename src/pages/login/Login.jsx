/* eslint-disable no-unused-vars */
import { Container, StyledPaper } from "./styles";
import logo from "../../../public/assets/logoinsta.png";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../services/api";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const { data } = await loginUser(formValues);
    if (data) {
      if (data.success) {
        toast.success(data.success);
        setCookies("access_token", data.token);
        localStorage.setItem("userID", data.userID);
        localStorage.setItem("name", data.name);
        navigate("/home");
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
          <Button variant="contained" onClick={handleLogin} fullWidth>
            Login
          </Button>
          <small>
            Not a user? <Link to="/">Signup</Link>{" "}
          </small>
        </StyledPaper>
      </Container>
    </>
  );
};

export default Login;
