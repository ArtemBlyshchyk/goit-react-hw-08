import { useDispatch } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";
import { refreshUser } from "./redux/auth/operations";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
              path="/register"
              element={
                <RestrictedRoute>
                  <RegistrationPage />
                </RestrictedRoute>
              }
            />

            <Route
              path="/login"
              element={
                <RestrictedRoute>
                  <LoginPage />
                </RestrictedRoute>
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
