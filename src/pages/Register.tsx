import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import axios from "axios";  // Import axios if not already imported
import { UserRegister } from "../models/User";

const api = "http://192.168.1.78:8222/api/v1/users";  // Define the API endpoint

const Register: React.FC = () => {
  const [formData, setFormData] = useState<UserRegister>({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    roleList: ["USER"]
  });

  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      console.log("Form Data:", formData);  // Log the form data before sending
      const response = await axios.post(api + "/register", {
        firstname: formData.firstname,
        lastname: formData.lastname,
        username: formData.username,
        password: formData.password,
        roleList: formData.roleList
      });

      alert(`Usuario registrado: ${formData.firstname}`);
      console.log("Register Response:", response.data);
    } catch (error) {
      console.error("Register Error:", error);
      setError("Error al registrar usuario");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center">
        Registro
      </Typography>
      <TextField
        name="firstname"
        label="Nombre"
        variant="outlined"
        fullWidth
        value={formData.firstname}
        onChange={handleInputChange}
        margin="normal"
      />
      <TextField
        name="lastname"
        label="Apellido"
        variant="outlined"
        fullWidth
        value={formData.lastname}
        onChange={handleInputChange}
        margin="normal"
      />
      <TextField
        name="username"
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        value={formData.username}
        onChange={handleInputChange}
        margin="normal"
      />
      <TextField
        name="password"
        label="Contraseña"
        type="password"
        variant="outlined"
        fullWidth
        value={formData.password}
        onChange={handleInputChange}
        margin="normal"
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button
        variant="contained"
        color="primary"
        onClick={handleRegister}
        fullWidth
      >
        Registrarse
      </Button>
    </Container>
  );
};

export default Register;
