import './App.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './components/Footer';

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
