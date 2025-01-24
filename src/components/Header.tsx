import { Link } from 'react-router';
import { Button } from './ui/button';

function Header() {
  return (
    <header className="bg-purple-400">
      <nav className="flex justify-between items-center mx-4">
        <Link to="/">
          <img className="w-24" src="/pngwing.com.png" alt="Logo" />
        </Link>

        <Link to="/favorite">
            <Button>Избранные</Button>
            {/* <button>Избранные</button> */}
          </Link>

        <div className='flex gap-4'>
          <Link to="/login">
            <button>Войти</button>
          </Link>
          <Link to="/register">
            <button>Авторизоваться</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
