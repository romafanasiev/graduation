import React from "react";
import { Route, Routes } from "react-router-dom";

import SignInPage from "./routes/sign-in-page/sign-in-page.component";
import SignUpPage from "./routes/sign-up-page/sign-up-page.component";
import ForgotPassPage from "./routes/forgot-pass-page/forgot-pass-page.component";
import ResetPassPage from "./routes/reset-pass-page/reset-pass-page.component";
import TicketsPage from "./routes/tickets-page/tickets-page.component";
import Navigation from "./components/navigation/navigation.component";

const App: React.FC = function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="sign_up" element={<SignUpPage />} />
        <Route path="forgot" element={<ForgotPassPage />} />
        <Route path="reset" element={<ResetPassPage />} />
        <Route path="/admin" element={<Navigation />}>
          <Route index element={<TicketsPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
