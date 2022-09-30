import React from "react";
// import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";

import SignInPage from "./routes/sign-in-page/sign-in-page.component";
import SignUpPage from "./routes/sign-up-page/sign-up-page.component";
import ForgotPassPage from "./routes/forgot-pass-page/forgot-pass-page.component";
import ResetPassPage from "./routes/reset-pass-page/reset-pass-page.component";
import TicketsPage from "./routes/tickets-page/tickets-page.component";
import Navigation from "./components/navigation/navigation.component";
import PrivateRoutes from "./utils/private-routes/private-routes.utils";
import ContactsPage from "./routes/contacts-page/contacts-page.component";
import AddPhotoPage from "./routes/add-photo/add-photo-page";
import MessageDetailsPage from "./routes/message-details-page/message-details-page.component";
import SettingsPage from "./routes/settings-page/settings-page.component";
import OverviewPage from "./routes/overview-page/overview-page.component";
import { RootState } from "./store/store";

import { whiteTheme, blackTheme } from "./utils/theme/theme";

// import MESSAGES_DATA from "./utils/users.data";
// import { addCollectionAndDocuments } from "./utils/firebase/firebase.utils";

const App: React.FC = function App() {
  // useEffect(() => {
  //   addCollectionAndDocuments("messages", MESSAGES_DATA);
  // }, []);
  const themeColor = useSelector(
    (state: RootState) => state.user.whiteThemeColor,
  );

  return (
    <ThemeProvider theme={themeColor ? whiteTheme : blackTheme}>
      <CssBaseline />
      <div className="app">
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<SignInPage />} />
            <Route path="admin" element={<Navigation />}>
              <Route index element={<OverviewPage />} />
              <Route path="overview" element={<OverviewPage />} />
              <Route path="tickets" element={<TicketsPage />} />
              <Route path="ideas" element={<h1>Ideas page</h1>} />
              <Route path="contacts" element={<ContactsPage />} />
              <Route path="agents" element={<h1>Agents page</h1>} />
              <Route path="articles" element={<h1>Articles page</h1>} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="subscription" element={<h1>Subscription page</h1>} />
              <Route
                path="messages/:messageId"
                element={<MessageDetailsPage />}
              />
            </Route>

            <Route path="reset" element={<ResetPassPage />} />
            <Route path="photo" element={<AddPhotoPage />} />
          </Route>
          <Route path="sign_in" element={<SignInPage />} />
          <Route path="sign_up" element={<SignUpPage />} />
          <Route path="forgot" element={<ForgotPassPage />} />
          <Route path="*" element={<SignInPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
