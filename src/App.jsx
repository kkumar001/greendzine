import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Employees } from "./pages";
import Login from "./Auth/Login";
import { PrivateRoutes } from "./Auth/Login";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/allEmployees" element={<Employees />} />
        </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App;