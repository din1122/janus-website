import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './App.css';
import HomePage from './Pages/HomePage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import TermsOfUsePage from './Pages/TermsOfUsePage';
import AboutUsPage from './Pages/AboutPage.tsx';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage/PrivacyPolicyPage';
import InsurancesPage from './Pages/InsurancesPage.tsx';
import ProvidersPage from './Pages/ProvidersPage.tsx';
import PatientsPage from './Pages/PatientsPage.tsx';
import ErrorPage from './Pages/ErrorPage.tsx';
import ContactUsPage from './Pages/ContactUsPage.tsx';
import InProgressPage from './Pages/InProgressPage.tsx';
import DarkHomePage from '~/Pages/HomePageDark.tsx';
// import BlogPage from './Pages/Blog/BlogPage.tsx';
// import BlogPostPage from './Pages/Blog/BlogPostPage.tsx';
// import DragDropInteraction from '~/components/DragDropInteration.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<ErrorPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/dark-home-page" element={<DarkHomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/patients" element={<PatientsPage />} />
        <Route path="/providers" element={<ProvidersPage />} />
        <Route path="/insurance-companies" element={<InsurancesPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        <Route path="/in-progress" element={<InProgressPage />} />
        {/* <Route path="/blog" element={<BlogPageTest />} /> */}
        {/* <Route path="/blog/" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} /> */}
        {/* <Route path="/drag" element={<DragDropInteraction />} /> */}
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
