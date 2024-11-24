import './App.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './components/Footer';
import { apiPlugin, storyblokInit } from '@storyblok/react';
import BlogPostPage from './Pages/Blog/BlogPostPage';

storyblokInit({
  // accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  accessToken: 'wvepiKYapN0cpmCzOwpaggtt',
  use: [apiPlugin],
  components: {
    page: BlogPostPage
  }
});

function App() {
  return (
    <>
      <Outlet />
      <Footer />
      <ScrollRestoration /> {/* used to scroll to top on route change */}
    </>
  );
}

export default App;
