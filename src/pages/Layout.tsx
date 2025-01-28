import Header from 'src/components/Header';
import { Outlet } from 'react-router';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { useState } from 'react';

function Layout() {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode)
  return (
    <main className={darkMode ? 'dark' : ''}>
      <div className='bg-background text-foreground h-screen'>

   
      <Header setDarkMode={setDarkMode}/>

      <div className="container mx-auto ">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </div>
      </div>
    </main>
  );
}

export default Layout;
