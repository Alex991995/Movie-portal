import { useForm } from 'react-hook-form';
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
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserRegister } from './Register';
import { useAuth } from 'src/hoc/AuthProvider';

const schemaRegister = yup.object({
  username: yup.string().required('username is required'),
  password: yup.string().min(3).required('password is required'),
});

type User = yup.InferType<typeof schemaRegister>;

function Login() {
  const { logIn  } = useAuth()
  const form = useForm({
    resolver: yupResolver(schemaRegister),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  function onSubmit(data: User) {
    Object.keys(localStorage).forEach(function (key) {
      const user = localStorage.getItem(key);
      
      if (user) {
        console.log(user)
        const result = JSON.parse(user) as UserRegister;
        if (data.username === result.username && data.password === result.password) {
          logIn(data.username)
        }
      }

    });
  }

  return (
    <section className="flex justify-center">
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
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Type your username" {...field} />
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Type your password" {...field} type="password" />
                </FormControl>
                {form.formState.errors.password ? (
                  <FormMessage className="h-1" />
                ) : (
                  <p className="h-1"></p>
                )}
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
}

export default Login;
