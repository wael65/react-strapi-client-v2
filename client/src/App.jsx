import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppState from "./context/AppState";

import Home from "./pages/Home";
import Product from "./pages/Product";
import CheckOut from "./pages/CheckOut";
import Register from "./pages/Register";
import LogOut from "./pages/LogOut";

import SignIn from "./pages/logIn";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Router>
        <AppState>
          <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </AppState>
      </Router>
    </>
  );
}

export default App;

// export const useAuth = () => {
//   return useContext(GlobalContext);
// };
