import { useNavigate } from 'react-router';
import { Button } from 'src/components/ui/button';

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-4">
      <img src="/pageNotFound.png" alt="Logo" className="max-w-[800px]" />
      <Button variant="secondary" onClick={() => navigate('/')}>
        Go to Home Page
      </Button>
    </section>
  );
}

export default NotFoundPage;
