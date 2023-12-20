import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import SignUpPage from './components/pages/SignUpPage';
import AccountPage from './components/pages/AccountPage';
import BudgetPage from './components/pages/BudgetPage';
import ForecastPage from './components/pages/ForecastPage';
import DetailsPage from './components/pages/DetailsPage';
import TransferPage from './components/pages/TransferPage';
import AdminPage from './components/pages/AdminPage';
import DetailClientAdminPage from './components/pages/DetailClientAdminPage';
import UpdateClientAdminPage from './components/pages/UpdateClientAdminPage';
import ConditionsPage from './components/pages/ConditionsPage';
import LegalNoticePage from './components/pages/LegalNotice';
import TestPage from './components/TestPage';

const router = createBrowserRouter([
  {
    path:"/",
    element: <HomePage />
  },
  {
    path:"/about",
    element: <AboutPage />
  },
  {
    path:"/signup",
    element: <SignUpPage />
  },
  {
    path:"/account",
    element: <AccountPage />
  },
  {
    path:"/budget",
    element: <BudgetPage />
  },
  {
    path:"/forecast",
    element: <ForecastPage />
  },
  {
    path:"/details",
    element: <DetailsPage />
  },
  {
    path:"/transfer",
    element: <TransferPage />
  },
  {
    path:"/admin",
    element: <AdminPage />
  },
  {
    path:"/detail-client",
    element: <DetailClientAdminPage />
  },
  {
    path:"/update-client",
    element: <UpdateClientAdminPage />
  },
  {
    path:"/conditions",
    element: <ConditionsPage />
  },
  {
    path:"/legal-notice",
    element: <LegalNoticePage />
  },
  {
    path:"/test",
    element: <TestPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
