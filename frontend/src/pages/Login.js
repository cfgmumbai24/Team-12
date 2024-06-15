import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Container, Typography } from "@mui/material";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/mentor/login",
        formData
      );
      console.log(res.data);
      localStorage.setItem("mentorId", res.data.mentor._id);
      navigate("/mentor/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Mentor Login
      </Typography>
      <TextField
        label="Username"
        fullWidth
        margin="normal"
        onChange={handleChange}
        name="username"
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        onChange={handleChange}
        name="password"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        fullWidth
      >
        Login
      </Button>
    </Container>
  );
};

export default Login;
