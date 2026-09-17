import { lazy, Suspense, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const Home = lazy(() => import('./marketing/Home'));
const SecondaryPage = lazy(() => import('./pages/SecondaryPage'));

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  useEffect(() => {
    const name = path === '/' ? 'API engineering workbench for Android' : path.slice(1).replace(/-/g, ' ');
    document.title = `Taho — ${name}`;
  }, [path]);
  return (
    <>
      <a className="global-skip" href="#main-content">Skip to content</a>
      <Navbar />
      <Suspense fallback={<main id="main-content" className="route-loading" aria-busy="true">Opening Taho…</main>}>
        {path === '/' ? <Home /> : <SecondaryPage path={path} />}
      </Suspense>
      <Footer />
    </>
  );
}
