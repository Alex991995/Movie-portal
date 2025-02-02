import { Link } from 'react-router';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { useAuth } from 'src/hoc/AuthProvider';
import { useTranslation } from 'react-i18next';
import SwitcherLanguage from './SwitcherLanguage';
import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseLargeLine } from 'react-icons/ri';

interface HeaderProps {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ setDarkMode }: HeaderProps) {
  const { user, logOut } = useAuth();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    if (windowSize > 767) {
      setIsMenuOpen(false);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize]);

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
  function closeMenuIfClickAnyPlace(e: React.MouseEvent<HTMLElement>) {
    const node = e as unknown as Event & { target: HTMLElement };
    if (!node.target.getAttribute('data-switch')) {
      setIsMenuOpen(false);
    }
  }

  return (
    <header className="bg-purple-400">
      {!isMenuOpen ? (
        <RxHamburgerMenu
          size={30}
          className={`z-20 focus:outline-none md:hidden ${isMenuOpen && 'fixed'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      ) : (
        <RiCloseLargeLine
          size={30}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`z-20 focus:outline-none md:hidden ${isMenuOpen && 'fixed'}`}
        />
      )}

      <nav
        onClick={closeMenuIfClickAnyPlace}
        className={`${isMenuOpen ? 'd flex flex-col' : 'hidden'} items-center gap-4 transition-all md:flex md:justify-between`}
      >
        <Link to="/">
          <img className="w-24" src="/pngwing.com.png" alt="Logo" />
        </Link>

        <Link to="/favorite">
          <Button variant="link" className="bg-primary text-primary-foreground">
            {t('Favorites')}
          </Button>
        </Link>

        <div className="flex items-center gap-2">
          <Switch data-switch={true} id="theme-mode" onClick={() => setDarkMode(prev => !prev)} />
          <Label data-switch={true} htmlFor="theme-mode">
            {' '}
            {t('Switch the theme')}
          </Label>
        </div>

        <SwitcherLanguage />

        <div className="flex gap-4">{ifUserExistsShowUsernameOrRegister}</div>
      </nav>
    </header>
  );
}

export default Header;
