import { Link } from 'react-router';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Label } from './ui/label';

interface HeaderProps {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}


function Header({setDarkMode}:HeaderProps) {

 
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

        <div className='flex gap-2 items-center'>
          <Switch id="theme-mode" onClick={() => setDarkMode(prev => !prev)}/>
          <Label htmlFor="theme-mode" > Turn on theme</Label>
        </div>

        <div className="flex gap-4">
          <Link to="/login">
            <Button variant="link" className="bg-secondary text-secondary-foreground">
              Войти
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="link" className="bg-secondary text-secondary-foreground">
              Авторизоваться
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
