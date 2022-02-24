import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./pages/AuthPage";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/profile"
          element={
            authCtx.isLoggedIn ? (
              <ProfilePage />
            ) : (
              <Navigate replace to="/auth" />
            )
          }
        />
        {/* <Route path="*" element={<div>NotFound</div>} /> */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
