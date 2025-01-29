import { Link } from 'react-router';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { useAuth } from 'src/hoc/AuthProvider';

interface HeaderProps {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ setDarkMode }: HeaderProps) {
  const { user, logOut } = useAuth();
  //  const user =  result?.user
  //  const fn = result && result.setUser

  console.log(user);
  // const user = localStorage.getItem('authorized');
  let ifUserExistsShowUsernameOrRegister;

  if (user) {
    ifUserExistsShowUsernameOrRegister = (
      <>
        <Button variant="link" className="bg-secondary text-secondary-foreground">
          {user}
        </Button>
        <Button variant="link" className="bg-secondary text-secondary-foreground" onClick={logOut}>
          Log out
        </Button>
      </>
    );
  } else {
    ifUserExistsShowUsernameOrRegister = (
      <>
        <Link to="/login">
          <Button variant="link" className="bg-secondary text-secondary-foreground">
            Войти
          </Button>
        </Link>
        <Link to="/register">
          <Button variant="link" className="bg-secondary text-secondary-foreground">
            Зарегистрироватся
          </Button>
        </Link>
      </>
    );
  }

  return (
    <header className="bg-purple-400">
      <nav className="mx-4 flex items-center justify-between">
        <Link to="/">
          <img className="w-24" src="/pngwing.com.png" alt="Logo" />
        </Link>

        <Link to="/favorite">
          <Button variant="link" className="bg-primary text-primary-foreground">
            Избранные
          </Button>
        </Link>

        <div className="flex items-center gap-2">
          <Switch id="theme-mode" onClick={() => setDarkMode(prev => !prev)} />
          <Label htmlFor="theme-mode"> Turn on theme</Label>
        </div>

        <div className="flex gap-4">
          {
            ifUserExistsShowUsernameOrRegister /* <Link to="/login">
            <Button variant="link" className="bg-secondary text-secondary-foreground">
              Войти
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="link" className="bg-secondary text-secondary-foreground">
              Зарегистрироватся
            </Button>
          </Link> */
          }
        </div>
      </nav>
    </header>
  );
}

export default Header;
