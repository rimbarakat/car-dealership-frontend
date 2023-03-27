import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import Navbar from "./pages/navbar";
import RegisterPage from "./pages/register";
import Dashboard from "./pages/dashboard";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./pages/footer";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import ProductDetails from "./pages/cardetails";
import Appointments from "./pages/Forms";
import RequestTestDrive from "./pages/schedule";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} /> 
          <Route path="/car" element={<ProductDetails/>}/>
          <Route path="/requests" element={<Appointments/>}/>
          <Route path="/request_testdrive" element={<RequestTestDrive/>}/>
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
