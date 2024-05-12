import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Layout from './components/Layout/layout';
import AboutPage from './pages/About';
import BlogPage from './pages/Blog';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import NotFoundPage from './pages/NoPage';
// import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout title="PWOFinances | Home">
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout title="PWOFinances | About">
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout title="PWOFinances | Blog">
              <BlogPage />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout title="PWOFinances | Services">
              <ServicesPage />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout title="PWOFinances | Contact">
              <ContactPage />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout title="PWOFinances | 404:Page Not Found">
              <NotFoundPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
