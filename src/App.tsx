import React from "react";
import { Route, Routes } from "react-router-dom";

import LogInPage from "./routes/log-in-page/log-in-page.component";
import SignUpPage from "./routes/sign-up-page/sign-up-page.component";
import ForgotPassPage from "./routes/forgot-pass-page/forgot-pass-page.component";
import ResetPassPage from "./routes/reset-pass-page/reset-pass-page.component";

const App: React.FC = function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="log_in" element={<LogInPage />} />
        <Route path="sign_up" element={<SignUpPage />} />
        <Route path="forgot_pass" element={<ForgotPassPage />} />
        <Route path="reset_pass" element={<ResetPassPage />} />
      </Routes>
    </div>
  );
};

export default App;
