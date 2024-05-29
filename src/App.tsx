import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Layout from './components/Layout/layout';
import AboutPage from './pages/About';
import BlogPage from './pages/Blog';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import NotFoundPage from './pages/NoPage';
import PrivacyPage from './pages/PrivacyPolicy';
// import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout title="Home | PWOFinances">
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout title="About | PWOFinances">
              <AboutPage />
            </Layout>
          }
        />

        <Route
          path="/services"
          element={
            <Layout title="Services | PWOFinances">
              <ServicesPage />
            </Layout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Layout title="Contact | PWOFinances">
              <ContactPage />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout title="Privacy Policy | PWOFinances">
              <PrivacyPage />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout title="404:Page Not Found | PWOFinances">
              <NotFoundPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
