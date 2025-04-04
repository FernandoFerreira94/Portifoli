import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RoutesApp from "./routes";
import AuthProvider from "./contexts/auth";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ToastContainer autoClose={5000} />
          <RoutesApp />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
