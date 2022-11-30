import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from '../components';
import {
  SignInPage,
  OverviewPage,
  TicketsPage,
  ContactsPage,
  SettingsPage,
  MessageDetailsPage,
  ResetPassPage,
  AddPhotoPage,
  SignUpPage,
  ForgotPassPage,
} from '../pages';
import PrivateRoutes from './PrivateRoutes.routes';

export const Routing: FC = () => {
  return (
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
          <Route path="messages/:messageId" element={<MessageDetailsPage />} />
        </Route>

        <Route path="reset" element={<ResetPassPage />} />
        <Route path="photo" element={<AddPhotoPage />} />
      </Route>
      <Route path="sign_in" element={<SignInPage />} />
      <Route path="sign_up" element={<SignUpPage />} />
      <Route path="forgot" element={<ForgotPassPage />} />
      <Route path="*" element={<SignInPage />} />
    </Routes>
  );
};
