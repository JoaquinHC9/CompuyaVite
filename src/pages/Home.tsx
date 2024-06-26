import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";

export default function Home() {
  const signOut = useSignOut();
  const navigate = useNavigate();

  const logout = () => {
    signOut();
    navigate("/login");
  };

  return (
    <Container>
      <Typography variant="h2" color="secondary">
        Bievenido
      </Typography>
      <Button variant="contained" color="secondary" onClick={logout}>
        Logout
      </Button>
    </Container>
  );
}