import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";  // Import axios if not already imported
import { useNavigate } from "react-router-dom";
import { UserProfileToken } from "../models/User";

const api = "http://192.168.1.78:8222/api/v1/users";  // Define the API endpoint

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();  

  const loginAPI = async () => {
    try {
      const data = await axios.post<UserProfileToken>(api + "/login", {
        username: username,
        password: password,
      });
      return data;
    } catch (error) {
      console.log("Login Error:", error);
      throw error;  // Re-throw the error to propagate it up
    }
  };

  const handleLogin = async () => {
    try {
      const response = await loginAPI();
      console.log("Login Response:", response);  // Log the response for debugging
      if (response) {
        navigate("/dashboard");
      }
    } catch (error) {
      setError("Credenciales inválidas");
      console.error("Login Error:", error);  // Log the error for debugging
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center">
        Iniciar sesión
      </Typography>
      <TextField
        label="Usuario"
        variant="outlined"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Contraseña"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Iniciar sesión
      </Button>
    </Container>
  );
}
