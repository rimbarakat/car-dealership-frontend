import "./App.css";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import Navbar from "./pages/navbar";
import RegisterPage from "./pages/register";
import Dashboard from "./pages/dashboard";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./pages/footer";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import CarDetails from "./pages/cardetails";
import Appointments from "./pages/Forms";
import RequestTestDrive from "./pages/schedule";
import CarForm from "./pages/createcar";
import CarEditForm from "./pages/editcar";
import AboutMe from "./pages/AboutMe";
import CarComparison from "./pages/CarComparison";

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
          <Route exact path="/cars/:id" element={<CarDetails/>}/>
          <Route path="/requests" element={<Appointments/>}/>
          <Route path="/request_testdrive" element={<RequestTestDrive/>}/>
          <Route path="/createcar" element={<CarForm/>}/>
          <Route path="/editcar/:id" element={<CarEditForm/>}></Route>
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/compare" element={<CarComparison />} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
