import React from "react";
import { Route, Routes } from "react-router-dom";

import SignInPage from "./routes/sign-in-page/sign-in-page.component";
import SignUpPage from "./routes/sign-up-page/sign-up-page.component";
import ForgotPassPage from "./routes/forgot-pass-page/forgot-pass-page.component";
import ResetPassPage from "./routes/reset-pass-page/reset-pass-page.component";
import TicketsPage from "./routes/tickets-page/tickets-page.component";
import Navigation from "./components/navigation/navigation.component";
import PrivateRoutes from "./utils/private-routes/private-routes.utils";

const App: React.FC = function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<SignInPage />} />
          <Route path="admin" element={<Navigation />}>
            <Route index element={<TicketsPage />} />
            <Route path="overview" element={<h1>Overwiev page</h1>} />
            <Route path="tickets" element={<TicketsPage />} />
            <Route path="ideas" element={<h1>Ideas page</h1>} />
            <Route path="contacts" element={<h1>Ideas page</h1>} />
            <Route path="agents" element={<h1>Agents page</h1>} />
            <Route path="articles" element={<h1>Articles page</h1>} />
            <Route path="settings" element={<h1>Settings page</h1>} />
            <Route path="subscription" element={<h1>Subscription page</h1>} />
          </Route>
          <Route path="reset" element={<ResetPassPage />} />
        </Route>
        <Route path="sign_in" element={<SignInPage />} />
        <Route path="sign_up" element={<SignUpPage />} />
        <Route path="forgot" element={<ForgotPassPage />} />
        <Route path="*" element={<SignInPage />} />
      </Routes>
    </div>
  );
};

export default App;
