import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout';
import React from 'react';
import { Spinner } from '@material-tailwind/react';
// import { Toaster } from 'react-hot-toast';

const HomePage = React.lazy(() => import('./pages/Home'));
const AboutPage = React.lazy(() => import('./pages/About'));
const ServicesPage = React.lazy(() => import('./pages/Services'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const NotFoundPage = React.lazy(() => import('./pages/NoPage'));
const PrivacyPage = React.lazy(() => import('./pages/PrivacyPolicy'));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            <Spinner className="h-12 w-12" color="light-blue" />
          </div>
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <Layout title="Home | PWO Finances">
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/about-us"
            element={
              <Layout title="About | PWO Finances">
                <AboutPage />
              </Layout>
            }
          />

          <Route
            path="/services"
            element={
              <Layout title="Services | PWO Finances">
                <ServicesPage />
              </Layout>
            }
          />
          <Route
            path="/contact-us"
            element={
              <Layout title="Contact | PWO Finances">
                <ContactPage />
              </Layout>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <Layout title="Privacy Policy | PWO Finances">
                <PrivacyPage />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout title="404:Page Not Found | PWO Finances">
                <NotFoundPage />
              </Layout>
            }
          />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
