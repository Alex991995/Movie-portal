import { Link } from 'react-router';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { useAuth } from 'src/hoc/AuthProvider';
import { useTranslation } from 'react-i18next';
import SwitcherLanguage from './SwitcherLanguage';
import SheetDemo from './SheetDemo';
import { useEffect, useState } from 'react';

interface HeaderProps {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

// function Header({ setDarkMode }: HeaderProps) {
//   const { user, logOut } = useAuth();
//   const { t } = useTranslation();
//   let ifUserExistsShowUsernameOrRegister;

//   if (user) {
//     ifUserExistsShowUsernameOrRegister = (
//       <>
//         <Button variant="link" className="bg-secondary text-secondary-foreground">
//           {user}
//         </Button>
//         <Button variant="link" className="bg-secondary text-secondary-foreground" onClick={logOut}>
//           {t('Log out')}
//         </Button>
//       </>
//     );
//   } else {
//     ifUserExistsShowUsernameOrRegister = (
//       <>
//         <Link to="/login">
//           <Button variant="link" className="bg-secondary text-secondary-foreground">
//             {t('Log in')}
//           </Button>
//         </Link>
//         <Link to="/register">
//           <Button variant="link" className="bg-secondary text-secondary-foreground">
//             {t('Sign up')}
//           </Button>
//         </Link>
//       </>
//     );
//   }

//   return (
//     <header className="bg-purple-400">
//       <nav className="mx-4 flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
//         <Link to="/" className="hidden md:block">
//           <img className="w-24" src="/pngwing.com.png" alt="Logo" />
//         </Link>

//         <Link to="/favorite">
//           <Button variant="link" className="bg-primary text-primary-foreground">
//             {t('Favorites')}
//           </Button>
//         </Link>

//         <div className="flex items-center gap-2">
//           <Switch id="theme-mode" onClick={() => setDarkMode(prev => !prev)} />
//           <Label htmlFor="theme-mode"> {t('Switch the theme')}</Label>
//         </div>

//         <SwitcherLanguage />

//         <div className="flex gap-4">{ifUserExistsShowUsernameOrRegister}</div>
//       </nav>
//     </header>
//   );
// }

// export default Header;

function Header({ setDarkMode }: HeaderProps) {
  const { user, logOut } = useAuth();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let ifUserExistsShowUsernameOrRegister;

  if (user) {
    ifUserExistsShowUsernameOrRegister = (
      <>
        <Button variant="link" className="bg-secondary text-secondary-foreground">
          {user}
        </Button>
        <Button variant="link" className="bg-secondary text-secondary-foreground" onClick={logOut}>
          {t('Log out')}
        </Button>
      </>
    );
  } else {
    ifUserExistsShowUsernameOrRegister = (
      <>
        <Link to="/login">
          <Button variant="link" className="bg-secondary text-secondary-foreground">
            {t('Log in')}
          </Button>
        </Link>
        <Link to="/register">
          <Button variant="link" className="bg-secondary text-secondary-foreground">
            {t('Sign up')}
          </Button>
        </Link>
      </>
    );
  }

  return (
    <header className="bg-purple-400">
      <nav className="mx-4 flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
        <Link to="/" className="hidden md:block">
          <img className="w-24" src="/pngwing.com.png" alt="Logo" />
        </Link>

        {/* Burger Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Links Container */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center gap-4`}>
          <Link to="/favorite">
            <Button variant="link" className="bg-primary text-primary-foreground">
              {t('Favorites')}
            </Button>
          </Link>

          <div className="flex items-center gap-2">
            <Switch id="theme-mode" onClick={() => setDarkMode(prev => !prev)} />
            <Label htmlFor="theme-mode"> {t('Switch the theme')}</Label>
          </div>

          <SwitcherLanguage />

          <div className="flex gap-4">{ifUserExistsShowUsernameOrRegister}</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
