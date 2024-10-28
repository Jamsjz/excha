import { Checkbox } from '@/components/ui/checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Log in" />

            <form onSubmit={submit} className='flex flex-col items-center justify-center mt-4'>

                <Card className='w-[80%]'>
                    <CardTitle className='m-3'>Log in</CardTitle>
                    <CardContent>
                        <div>
                            <Label>Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <Label>Password</Label>

                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4 block">
                            <Label className="flex items-center">
                                <Checkbox
                                // name="remember"
                                // checked={data.remember}
                                // onChange={(e) =>
                                //     setData('remember', e.target.checked)
                                // }
                                />
                                <span className="ms-2 text-sm ">
                                    Remember me
                                </span>
                            </Label>
                        </div>
                    </CardContent>
                    <CardFooter>
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="rounded-md text-sm  underline  focus:outline-none focus:ring-2  focus:ring-offset-2"
                            >
                                Forgot your password?
                            </Link>
                        )}

                        <Button type="submit" className="ms-4" disabled={processing}>
                            Log in
                        </Button>
                    </CardFooter>
                </Card>
            </form >
        </>
    );
}
