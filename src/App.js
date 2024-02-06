import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Login from "./screens/Login";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";
import Explore from "./screens/Explore";
import ViewAll from "./screens/ViewAll screen";
import Foooter from "./components/Foooter";
import ServiceDetail from "./screens/ServiceDetail";
import ComponentScreen from "./screens/componentScreen";
import Admin from "./screens/admin";
import MiniDrawer from "./components/miniDarwer/MiniDrawer";

function App() {
  return (
    <div>
      {/* Dashboard rendered without Navbar and Footer */}

       
      <Router>
        {/* Navbar and other components inside the Router */}
        <Navbar />   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Explore" element={<Explore />} />
          <Route path="Service" element={<ServiceDetail />} />
          <Route path="/componentScreen/:item" element={<ComponentScreen />} />
          <Route path="/ViewAll/:title/:bg" element={<ViewAll />} />
          <Route path="/Admin/*" element={<MiniDrawer />} />
        </Routes>
        <Foooter />  
      </Router>
      
    </div>
  );
}

export default App;
