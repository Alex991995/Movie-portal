import Header from 'src/components/Header';
import { Outlet } from 'react-router';
import ErrorBoundary from 'src/components/ErrorBoundary';

function Layout() {
  return (
    <main>
      <Header />

      <div className="container mx-auto">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </div>
    </main>
  );
}

export default Layout;
