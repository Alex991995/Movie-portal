import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { Button } from '../components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { UserRegister } from './Register';
import { useAuth } from 'src/hoc/AuthProvider';

const schemaRegister = yup.object({
  username: yup.string().required('username is required'),
  password: yup.string().min(3).required('password is required'),
});

type User = yup.InferType<typeof schemaRegister>;

function Login() {
  const { user, logIn } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const form = useForm({
    resolver: yupResolver(schemaRegister),
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
  });

  function onSubmit(data: User) {
    if (!user) {
      const found = Object.keys(localStorage).some(key => {
        const registeredUser = localStorage.getItem(key);

        if (registeredUser) {
          const result = JSON.parse(registeredUser) as UserRegister;
          if (data.username === result.username && data.password === result.password) {
            logIn(data.username);
            navigate('/');
            return true;
          }
        }
        return false;
      });

      if (!found) {
        form.setError('username', {
          message: "User doesn't exist, please register",
        });
      }
    }
  }

  return (
    <section className="flex h-full justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-4 flex basis-96 flex-col justify-center space-y-8"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('Username')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('Type your username')} {...field} />
                </FormControl>
                {form.formState.errors.username ? (
                  <FormMessage className="h-1" />
                ) : (
                  <p className="h-1"></p>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('Password')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('Type your password')} {...field} type="password" />
                </FormControl>
                {form.formState.errors.password ? (
                  <FormMessage className="h-1" />
                ) : (
                  <p className="h-1"></p>
                )}
              </FormItem>
            )}
          />
          <Button type="submit" disabled={!form.formState.isValid}>
            {t('Submit')}
          </Button>
        </form>
      </Form>
    </section>
  );
}

export default Login;
