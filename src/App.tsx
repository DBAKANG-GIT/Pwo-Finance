import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './landing-page-section/landing-page';
import Layout from './components/Layout/layout';
// import Explore from './pages/Explore';
// import Surprise from './pages/Surprise';
// import Nopages from './pages/Nopages';
// import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout title="PWOFinances | Home">
              <LandingPage />
            </Layout>
          }
        />
        {/* <Route
          path="/about"
          element={
            <Layout title="ChefAI | Explore">
              <Explore />
            </Layout>
          }
        /> */}
        {/* <Route
          path="/services"
          element={
            <Layout title="ChefAI | Surprise">
              <Surprise />
            </Layout>
          }
        /> */}
        {/* <Route
          path="/contact"
          element={
            <Layout title="ChefAI | Contact">
              <Surprise />
            </Layout>
          }
        /> */}
        {/* <Route
          path="*"
          element={
            <Layout title="PWOFinances | 404:Page Not Found">
              <Nopages />
            </Layout>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
