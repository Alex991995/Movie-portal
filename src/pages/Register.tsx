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

const schemaRegister = yup.object({
  username: yup.string().required('username is required'),
  password: yup.string().min(3).required('password is required'),
  passwordConfirm: yup.string().oneOf([yup.ref('password')], 'passwords must match'),
});

export type UserRegister = yup.InferType<typeof schemaRegister>;

function Register() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const form = useForm({
    resolver: yupResolver(schemaRegister),
    defaultValues: {
      username: '',
      password: '',
      passwordConfirm: '',
    },
  });

  function onSubmit(data: UserRegister) {
    localStorage.setItem(data.username, JSON.stringify(data));
    navigate('/login');
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
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('Password confirmation')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('Confirm your password')} {...field} type="password" />
                </FormControl>
                {form.formState.errors.passwordConfirm ? (
                  <FormMessage className="h-1" />
                ) : (
                  <p className="h-1"></p>
                )}
              </FormItem>
            )}
          />
          <Button type="submit">{t('Submit')}</Button>
        </form>
      </Form>
    </section>
  );
}

export default Register;
