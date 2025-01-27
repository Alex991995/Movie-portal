import Header from 'src/components/Header';
import { Outlet } from 'react-router';
import ErrorBoundary from 'src/components/ErrorBoundary';

function Layout() {
  return (
    <main className="">
      <Header />

      <div className="wrapper">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </div>
    </main>
  );
}

export default Layout;
