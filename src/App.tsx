import './assets/styles/App.css';
import { Route, Routes} from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import Home  from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register'; 
import NotFound from './pages/NotFound';

function App() {  
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth loginPath="/login"><Home /></RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;
