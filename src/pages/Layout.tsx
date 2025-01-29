import Header from 'src/components/Header';
import { Outlet } from 'react-router';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { useState } from 'react';
import AuthProvider from 'src/hoc/AuthProvider';

function Layout() {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);
  return (
    <main className={darkMode ? 'dark' : ''}>
      <AuthProvider>
        <div className="h-screen bg-background text-foreground">
          <Header setDarkMode={setDarkMode} />

          <div className="container mx-auto">
            <ErrorBoundary>
              <Outlet />
            </ErrorBoundary>
          </div>
        </div>
      </AuthProvider>
    </main>
  );
}

export default Layout;
